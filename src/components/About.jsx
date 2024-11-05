import React from "react";
import about from "../images/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about">
      <div className="about-info">
        <h4 className="about-info-name">ABOUT EVENT</h4>
        <h3 className="about-info-title">
          Welcome to the Big Event GWECCC 2025
        </h3>
        <p className="about-info-desc">
          Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt
          labore et dolore magna aliqua enim ad minim veniam quis nostrud
          exercitation ullamco laboris nisi ut aliquip exea commodo consequat.
        </p>
        <div className="about-info-features">
          <div className="about-info-feature">
            <FontAwesomeIcon className="check-icon" icon={faCheck} />
            <span className="about-info-feature-name">
              Multiple Announcements during the event.
            </span>
          </div>
          <div className="about-info-feature">
            <FontAwesomeIcon className="check-icon" icon={faCheck} />
            <span className="about-info-feature-name">
              Logo & company details on the WordCamp.
            </span>
          </div>
          <div className="about-info-feature">
            <FontAwesomeIcon className="check-icon" icon={faCheck} />
            <span className="about-info-feature-name">
              Dedicated blog post thanking each Gold.
            </span>
          </div>
          <div className="about-info-feature">
            <FontAwesomeIcon className="check-icon" icon={faCheck} />
            <span className="about-info-feature-name">
              Acknowledgment and opening and closing.
            </span>
          </div>
        </div>
        <div className="register-now-button">
          <span>Register Now</span>
        </div>
      </div>
      <div className="about-image">
        <div className="outer-circle">
          <img src={about} alt="about-image"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
