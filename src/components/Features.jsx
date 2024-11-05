import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChampagneGlasses,
  faGem,
  faMagnifyingGlass,
  faUserGroup,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className="features">
      <div className="box1">
        <span>FEATURES</span>
        <h3>Our Feature</h3>
      </div>
      <div className="box">
        <FontAwesomeIcon className="box-icon" icon={faVolumeHigh} />
        <div className="box-info">
          <span>Great Speakers</span>
          <h3>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</h3>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="box-icon" icon={faMagnifyingGlass} />
        <div className="box-info">
          <span>Experience</span>
          <h3>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</h3>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="box-icon" icon={faGem} />
        <div className="box-info">
          <span>Networking</span>
          <h3>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</h3>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="box-icon" icon={faChampagneGlasses} />
        <div className="box-info">
          <span>Party</span>
          <h3>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</h3>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="box-icon" icon={faUserGroup} />
        <div className="box-info">
          <span>New People</span>
          <h3>Dolor sit amet consectetur elit sed do eiusmod tempor incd.</h3>
        </div>
      </div>
    </div>
  );
};

export default Features;
