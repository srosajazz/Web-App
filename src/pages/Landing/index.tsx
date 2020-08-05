import React from "react";
import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

// import css from pages/Landing pages
import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="logo" />
          <h2>Your online platform for study.</h2>
        </div>
        <img src={landingImg} alt="Platform for study" className="hero-image" />

        {/* Buttons */}
        <div className="buttons-container">
          <a href="/" className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </a>

          <a href="/" className="give-classes">
            <img src={giveClassesIcon} alt="Study" />
            Teach Code
          </a>
        </div>
        {/*  */}
        <span className="total-connections">
          Total of 400 conections
          <img src={purpleHeartIcon} alt="purple heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
