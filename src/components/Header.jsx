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
import "./Header.css"; // Assuming styles are in Header.css

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Profile Image */}
        <img
          src="/path/to/your/image.png"
          alt="Profile"
          className="profile-pic"
        />

        {/* Name and Title */}
        <h1>Javan Cassidy</h1>
        <h2>Full Stack Developer | Cloud Engineer</h2>

        {/* Buttons */}
        <div className="buttons">
          <button className="hire-btn">Hire Me</button>
          <button className="download-btn">Download CV</button>
        </div>

        {/* Social Icons with Tooltips */}
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
            href="https://www.linkedin.com/in/jvmacuto"
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
      </div>
    </header>
  );
};

export default Header;
