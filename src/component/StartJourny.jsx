import React from "react";
import { useNavigate } from "react-router-dom";

const StartJourny = () => {

   const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // pehle home page par jao

    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // thoda delay important hai
  };
  return (
    <div className="journey-container">
      <div className="journey-card">
        <h1>Start Your Fitness Journey 💪</h1>
        <p>
          Push your limits. Transform your body. Become the best version of yourself.
        </p>

        <div className="features">
          <div className="feature">🔥 Fat Loss</div>
          <div className="feature">💪 Muscle Gain</div>
          <div className="feature">⚡ Strength</div>
        </div>

         <button className="journey-btn" onClick={handleClick}>
      Join Now 🚀
    </button>
      </div>
    </div>
  );
};

export default StartJourny;