import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"; // Assuming you'll add this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>Javan Cassidy - © 2024</p>
        <p>Full Stack Developer | Cloud Engineer</p>
      </div>
      <div className="social-icons">
        <div className="tooltip-container">
          <a href="mailto:j.cassidy@outlook.co.nz" className="icon-circle">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <span className="tooltip-text">j.cassidy@outlook.co.nz</span>
        </div>
        <div className="tooltip-container">
          <a href="tel:+641234567" className="icon-circle">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <span className="tooltip-text">+64 123 4567</span>
        </div>
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
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-circle"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
