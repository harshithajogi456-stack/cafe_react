import React from "react";
import "../assets/style.css"; // Make sure your CSS is in src/assets

const Menu = () => {
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
        <h2>Our Menu</h2>

        <div className="menu-section">
          <h3>Coffee Selection ☕</h3>
          <div className="menu-box">
            <p>Espresso <span>₹120</span></p>
            <p>Cappuccino <span>₹160</span></p>
            <p>Caramel Latte <span>₹180</span></p>
            <p>Cold Brew Coffee <span>₹190</span></p>
          </div>
        </div>

        <div className="menu-section">
          <h3>Special Beverages 🥤</h3>
          <div className="menu-box">
            <p>Hot Chocolate <span>₹150</span></p>
            <p>Classic Iced Tea <span>₹130</span></p>
            <p>Fresh Lime Soda <span>₹110</span></p>
          </div>
        </div>

        <div className="menu-section">
          <h3>Bakery & Desserts 🍰</h3>
          <div className="menu-box">
            <p>Butter Croissant <span>₹140</span></p>
            <p>Chocolate Brownie <span>₹160</span></p>
            <p>Blueberry Muffin <span>₹150</span></p>
          </div>
        </div>

        <h2>Customer Favourites ⭐</h2>
        <div className="favourites">
          <div className="fav-card">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348"
              alt="Caramel Latte"
            />
            <h4>Caramel Latte ☕</h4>
            <p>Rich espresso blended with steamed milk and smooth caramel syrup.</p>
          </div>

          <div className="fav-card">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Cold Brew"
            />
            <h4>Cold Brew Coffee ☕</h4>
            <p>Slow-brewed for 12 hours to deliver a bold yet refreshing taste.</p>
          </div>

          <div className="fav-card">
            <img
              src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
              alt="Chocolate Brownie"
            />
            <h4>Chocolate Brownie 🍰</h4>
            <p>Soft, rich chocolate brownie served warm for a perfect finish.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Freshly crafted with care at Manipal Mug ☕</p>
      </footer>
    </div>
  );
};

export default Menu;
