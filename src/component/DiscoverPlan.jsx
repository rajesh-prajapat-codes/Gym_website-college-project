import React from "react";

const DiscoverPlan = () => {
  return (
    <div className="plan-container">
      <h1 className="plan-title">Choose Your Plan 📋</h1>

      <div className="plans">
        <div className="plan-card">
          <h2>Basic</h2>
          <p>₹999/month</p>
          <ul>
            <li>Gym Access</li>
            <li>Basic Training</li>
          </ul>
          <button>Select</button>
        </div>

        <div className="plan-card popular">
          <h2>Pro</h2>
          <p>₹1999/month</p>
          <ul>
            <li>Personal Trainer</li>
            <li>Diet Plan</li>
          </ul>
          <button>Select</button>
        </div>

        <div className="plan-card">
          <h2>Elite</h2>
          <p>₹2999/month</p>
          <ul>
            <li>1-on-1 Coaching</li>
          </ul>
          <button>Select</button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPlan;