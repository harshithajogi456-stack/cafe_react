import React from "react";
import "../assets/style.css"; // make sure your CSS is in src/assets

const Location = () => {
  return (
    <div>
      <header>
        <h1>Manipal Mug ☕</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/location">Location & Hours</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="content">
        <h2>Visit Us</h2>
        <p>📍 Vidyaratna Nagar, Manipal, Udupi, Karnataka</p>
        <p>⏰ Monday – Sunday: 8:00 AM – 10:00 PM</p>

        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0"
          alt="Cafe Location"
        />
      </section>

      <footer>
        <p>We look forward to welcoming you</p>
      </footer>
    </div>
  );
};

export default Location;
