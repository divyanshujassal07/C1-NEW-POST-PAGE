function Subscribe() {
  return (
    <section className="contact-section">
      <h2>Subscribe for daily Insider</h2>

      <form>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Subscribe;