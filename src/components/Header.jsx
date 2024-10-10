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
import "./Header.css";
import chillboardersImage from "../Assets/javan.jpg";
import { Link } from "react-scroll"; // Import the react-scroll Link
import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas

const Header = () => {
  // Function to generate and download the PDF from the webpage
  const downloadPDF = () => {
    const input = document.body; // You can change this to the specific element you want to capture

    // Use html2canvas to capture the element
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Javan_Cassidy_CV.pdf");
    });
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Profile Image */}
        <img
          src={chillboardersImage}
          alt="Chillboarders Profile"
          className="profile-pic"
        />

        {/* Name and Title */}
        <h1>Javan Cassidy</h1>
        <h2>Full Stack Developer | Cloud Engineer</h2>

        {/* Buttons */}
        <div className="buttons">
          <Link to="contact" smooth={true} duration={1000}>
            <button className="hire-btn">Hire Me</button>
          </Link>
          <button className="download-btn" onClick={downloadPDF}>
            Download CV
          </button>
        </div>

        {/* Social Icons with Tooltips */}
        <div className="social-icons-container">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
