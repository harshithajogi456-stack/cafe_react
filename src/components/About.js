import React from "react";
import "../assets/style.css"; // import CSS

const About = () => {
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
        <h2>About Manipal Mug ☕</h2>
        <img
          src={require("../assets/images/coffee.jpg")} // or your image name
          alt="Cafe Coffee"
        />
        <p>Manipal Mug is a student-friendly café created with the vibrant campus life of Manipal in mind. Designed as a comfortable and welcoming space, the café offers a perfect balance between relaxation and productivity.
    Whether it is a short break between lectures, a focused study session, or a casual conversation with friends, Manipal Mug provides an environment that feels calm, safe, and inviting. Our menu features carefully prepared coffee, refreshing beverages, and light bites that suit every part of a student’s day.
    What makes Manipal Mug stand out is its understanding of student needs — affordable options, a peaceful atmosphere, and consistent quality. With warm interiors and friendly service, the café has become a preferred spot for students to unwind, connect, and recharge.
    At Manipal Mug, every cup is served with comfort, care, and a sense of community.</p>
      </section>

      <footer>
        <p>Crafted with passion at Manipal Mug ☕</p>
      </footer>
    </div>
  );
};

export default About;
