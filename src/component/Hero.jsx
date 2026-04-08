import React from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <div className="title">
          <h1>LET'S</h1>
          <h1>GET</h1>
          <h1>MOVING</h1>
        </div>

        <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
        </div>

        <div className="buttons">
          <Link to="/start">
            <button>Start Your Journey</button>
          </Link>

          <Link to="/plan">
            <button>Discover Your Plan</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;