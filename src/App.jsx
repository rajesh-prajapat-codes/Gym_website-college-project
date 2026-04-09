import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import QRCode from "./pages/QRCode";

// Components
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import WorkoutSessions from "./component/WorkoutSessions";
import Gallery from "./component/Gallery";
import Pricing from "./component/Pricing";
import Contact from "./component/Contact";
import BMICalculator from "./component/BMICalculator";
import Footer from "./component/Footer";

// New Pages
import StartJourny from "./component/StartJourny";
import DiscoverPlan from "./component/DiscoverPlan";

// Toast
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* Navbar har page par dikhega */}
      <Navbar />

      {/* Routing system */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WorkoutSessions />
              <Gallery />
              <Pricing />
              <Contact />
              <BMICalculator />
            </>
          }
        />

        {/* Button wale pages */}
        <Route path="/start" element={<StartJourny />} />
        <Route path="/plan" element={<DiscoverPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qrcode" element={<QRCode />} />
      </Routes>

      {/* Footer har page par */}
      <Footer />

      {/* Toast notifications */}
      <ToastContainer theme="dark" position="top-center" />
    </>
  );
}

export default App;