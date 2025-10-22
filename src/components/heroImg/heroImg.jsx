import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Left/top div */}
      <div className="hero-intro">
        <h1>Welcome To</h1>
      </div>

      {/* Right/below div */}
      <div className="hero-main">
        <h1>Fitness Hub</h1>
        <p>Where fitness meets focus. We shape not just bodies, but discipline — helping you stay consistent, learn smarter, and move with purpose.</p>
      </div>
    </section>
  );
};

export default Hero;
