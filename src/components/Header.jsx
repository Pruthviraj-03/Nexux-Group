import React, { useState, useEffect } from "react";
import nexus from "../images/Nexus Logo.png";
import partner from "../images/GWECCC Logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ scrollToSection }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleRefreshPage = () => {
    window.location.reload();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="header">
          <img
            src={nexus}
            className="nexus-logo"
            alt="nexus-logo"
            onClick={handleRefreshPage}
          />
          <ul className="navbar">
            <li onClick={handleRefreshPage}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("speakers")}>Speakers</li>
            <li onClick={() => scrollToSection("tickets")}>Tickets</li>
            <li onClick={() => scrollToSection("register")}>Register</li>
          </ul>
          <img src={partner} className="partner-logo" alt="partner-logo" />
        </div>
      )}

      {isMobile && (
        <div className="mobile-header">
          <img
            src={nexus}
            className="mobile-nexus-logo"
            alt="nexus-logo"
            onClick={handleRefreshPage}
          />
          <img
            src={partner}
            className="mobile-partner-logo"
            alt="partner-logo"
          />
          <FontAwesomeIcon className="bars-icon" icon={faBars} />
        </div>
      )}
    </>
  );
};

export default Header;
