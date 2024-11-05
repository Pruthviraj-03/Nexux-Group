import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <div className="register">
      <div className="register-main">
        <div className="register-poster">
          <FontAwesomeIcon className="rocket-icon" icon={faRocket} />
          <span>REGISTER NOW</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmtempor incididunt labore et dolore magna.
          </p>
        </div>
        <div className="register-form">
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faUser} />
            <input type="text" placeholder="Full name"></input>
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faEnvelope} />
            <input type="text" placeholder="Email address"></input>
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faPhone} />
            <input type="text" placeholder="Contact no"></input>
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faGlobe} />
            <input type="text" placeholder="Organisation name"></input>
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faUsers} />
            <input type="number" placeholder=" No. of delegates"></input>
          </div>
          <div className="form-register-now-button">
            <span>Register Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
