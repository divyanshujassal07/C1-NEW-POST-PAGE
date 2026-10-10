import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      console.log("Login successful!");
      console.log("Email:", user.email);
      console.log("UID:", user.uid);

      const userRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        console.log("Firestore profile:", userSnapshot.data());
      } else {
        console.log("User profile does not exist in Firestore.");
      }

      navigate("/");
    } catch (err) {
      console.error("Login error code:", err.code);
      console.error("Login error message:", err.message);

      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err.code === "permission-denied") {
        setError("You logged in, but Firestore access was denied.");
      } else {
        setError("Login failed: " + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label htmlFor="email">Your email</label>

        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Your password</label>

        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="error-message" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Login;