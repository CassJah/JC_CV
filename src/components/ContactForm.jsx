import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="container">
        {" "}
        {/* Adding container class to keep consistency */}
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-form">
            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />

              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>

              <button type="submit">Send</button>
            </form>
          </div>

          <div className="contact-details">
            <p>Address: Aotearoa</p>
            <p>Phone: +1718-111-0011</p>
            <p>Email: j.cassidy@outlook.co.nz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
