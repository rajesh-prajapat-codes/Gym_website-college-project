import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with our high-energy workout sessions designed to 
          improve strength, endurance, and overall fitness. Whether you're a 
          beginner or a pro, our guided routines help you stay consistent and 
          achieve your fitness goals faster.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our intense and result-driven bootcamps that combine strength 
          training, cardio, and functional exercises. Train in a motivating 
          environment with expert coaches and transform your body like never before.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Strength & Conditioning Camp</h4>
            <p>
              Build muscle, increase stamina, and enhance your physical power 
              with structured strength training programs.
            </p>
          </div>

          <div>
            <h4>Fat Burn Bootcamp</h4>
            <p>
              High-intensity workouts focused on burning calories, reducing fat, 
              and boosting metabolism.
            </p>
          </div>

          <div>
            <h4>Cardio Blast Session</h4>
            <p>
              Improve heart health and endurance with dynamic cardio exercises 
              that keep you energized.
            </p>
          </div>

          <div>
            <h4>Functional Fitness Training</h4>
            <p>
              Train your body for real-life movements with exercises that improve 
              flexibility, balance, and coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;