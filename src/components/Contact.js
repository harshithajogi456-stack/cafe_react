import React from "react";
import "../assets/style.css"; // Make sure style.css is in src/assets

const Contact = () => {
  
  // Function to handle button click
  const submitContactForm = () => {
    alert("Message sent!"); // You can replace this with actual form handling
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

      <section className="content">
        <h2>Contact Us</h2>
        <p>📞 Phone: +91 98765 43210</p>
        <p>📧 Email: manipalmug@gmail.com</p>

        <button onClick={submitContactForm}>Send Message</button>
      </section>

      <footer>
        <p>Thank you for choosing Manipal Mug ☕</p>
      </footer>
    </div>
  );
};

export default Contact;
