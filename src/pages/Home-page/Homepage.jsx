import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file
import Navbar from "../../components/Navbar/Navbar";
import badminton_court from "../../assets/images/badminton_court.png";
import shuttle from "../../assets/images/shuttlecock.png";
import Footer from "../../components/Footer/Footer";

const HomePage = ({ googleToken }) => {
  return (
    <>
      {" "}
      <div className="home-container">
        <Navbar on="homePage" googleToken={googleToken} />
        <div className="hero-section">
          <h1>Make your every step count</h1>
          <Link to="/practice" className="practice-button">
            Start Practice
          </Link>
          <img
            className="court-image"
            src={badminton_court}
            alt="badminton court"
          />
          <img className="shuttle-image" src={shuttle} alt="shuttle" />
          <img className="shuttle-image two" src={shuttle} alt="shuttle" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
