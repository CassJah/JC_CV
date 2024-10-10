import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Make sure to replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_USER_ID with your actual EmailJS details.
    emailjs
      .send(
        "service_vrle4xj", // Your Service ID from EmailJS
        "template_h7ern3n", // Replace with your actual Template ID
        {
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
        },
        "m11hnwfDgxBgZRTC7" // Replace with your actual User ID from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", subject: "", email: "", message: "" }); // Clear the form after success
        },
        (error) => {
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

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
