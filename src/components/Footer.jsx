import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Assuming you'll add this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Javan Cassidy - © 2024</p>
        <p>Full Stack Developer | Cloud Engineer</p>
      </div>
      <div className="social-icons">
        {/* Email without mailto link */}
        <div className="tooltip-container">
          <div className="icon-circle">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <span className="tooltip-text">j.cassidy@outlook.co.nz</span>
        </div>
        {/* Phone link */}
        <div className="tooltip-container">
          <a href="tel:+641234567" className="icon-circle">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <span className="tooltip-text">+64 123 4567</span>
        </div>
        {/* Social links */}
        <a
          href="https://www.linkedin.com/in/javan-cassidy-8b119a332/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/CassJah"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
