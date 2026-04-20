import React from "react";

export default function App() {
  return (
    <div className="bg-dark text-white">
      <header className="hero">
        <h1>Pathirakozhi Restaurant</h1>
        <p>Authentic Kerala Taste</p>
        <button>Order Now</button>
      </header>

      <section className="about">
        <h2>About Us</h2>
        <p>
          Famous late-night restaurant in Kalamassery serving delicious Kerala
          style dishes at affordable prices.
        </p>
      </section>

      <section className="menu">
        <h2>Popular Dishes</h2>
        <div className="grid">
          <div className="card">Chicken Special</div>
          <div className="card">Porotta & Beef</div>
          <div className="card">Fried Chicken</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Kalamassery, Kochi</p>
        <p>📞 097784 46300</p>
      </section>

      <footer>© 2026 Pathirakozhi Restaurant</footer>
    </div>
  );
}