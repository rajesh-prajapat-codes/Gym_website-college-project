import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    // Category logic
    if (bmiValue < 18.5) {
      setCategory("Underweight");
      toast.warning("You are underweight.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal");
      toast.success("You have normal weight.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
      toast.warning("You are overweight.");
    } else {
      setCategory("Obese");
      toast.error("You are in the obese range.");
    }
  };

  // Dynamic color
  const getColor = () => {
    if (category === "Normal") return "green";
    if (category === "Underweight") return "orange";
    if (category === "Overweight") return "orange";
    if (category === "Obese") return "red";
    return "white";
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>

      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <button type="submit">Calculate BMI</button>

            {/* RESULT */}
            {bmi && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  background: "#111",
                  color: getColor(),
                }}
              >
                <h2>Your BMI: {bmi}</h2>
                <h3>Status: {category}</h3>
              </div>
            )}
          </form>
        </div>

        <div className="wrapper">
          <img src="/bmi.jpg" alt="bmiImage" />
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;