import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    event.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) return;

    if (query.includes("photo") || query.includes("gallery")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById("gallery")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else if (query.includes("home")) {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (query.includes("project")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById("work")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else if (query.includes("about")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById("about")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    } else {
      alert("No matching section found!");
    }
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        DEV@Deakin
      </Link>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>

      <div className="nav-buttons">
        <button type="button">Post</button>

        <Link to="/login" className="login-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;