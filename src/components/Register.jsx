import React, { useState } from "react"; // Import useState to manage input fields
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [organization, setOrganization] = useState("");
  const [delegates, setDelegates] = useState("");

  const handleRegister = () => {
    window.location.reload();
  };

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
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faEnvelope} />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faPhone} />
            <input
              type="text"
              placeholder="Contact no"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faGlobe} />
            <input
              type="text"
              placeholder="Organisation name"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <div className="field">
            <FontAwesomeIcon className="form-icon" icon={faUsers} />
            <input
              type="number"
              placeholder="No. of delegates"
              value={delegates}
              onChange={(e) => setDelegates(e.target.value)}
            />
          </div>
          <div className="form-register-now-button" onClick={handleRegister}>
            <span>Register Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
