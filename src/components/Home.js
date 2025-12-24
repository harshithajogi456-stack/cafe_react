import React, { useEffect } from "react";
import "../assets/style.css"; // Make sure your CSS is in src/assets

const Home = () => {

  // Equivalent of body onload
  useEffect(() => {
    showWelcome();
  }, []);

  // Function that runs on page load
  const showWelcome = () => {
    alert("Welcome to Manipal Mug ☕!");
  };

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

      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Cafe Interior"
        />
        <h2>Brewed for campus life</h2>
        <p>
          Serving quality coffee and handcrafted refreshments in a space
          designed for comfort and connection.
        </p>
      </section>

      <footer>
        <p>© 2025 Manipal Mug ☕. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
