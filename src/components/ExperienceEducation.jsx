import React from "react";
import "./ExperienceEducation.css"; // Custom CSS for styling

const ExperienceEducation = () => {
  return (
    <section className="experience-education-container">
      {/* Experience Section */}
      <div className="experience-section">
        <h2>Professional Experience</h2>
        <div>
          <h3>Business Owner | Chillboarders Aotearoa - 2019 – Present</h3>
          <ul>
            <li>
              Founded and manage a successful electric skateboard rental and
              merchandise business.
            </li>
            <li>
              Designed and maintained the e-commerce platform and brand website.
            </li>
            <li>
              Developed and implemented social media marketing strategies.
            </li>
          </ul>
        </div>

        <div>
          <h3>
            Senior Soil Technician | LDE Ltd - 2020 – Present
          </h3>
          <ul>
            <li>
              Over 15 years of experience in managing and conducting ground
              investigations.
            </li>
            <li>
              Led the development of an offline-first field app, streamlining
              data collection.
            </li>
            <li>
              Provided technical expertise and managed large-scale geotechnical
              projects.
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        <div>
          <h3>
            Certificate in Digital Technology Product Solutions (Level 5 - NZQA
            approved)
          </h3>
          <p>
            <strong>
              Mission Ready HQ - Tech Career Accelerator Programme
            </strong>
          </p>
          <p>
            <em>May 2024 - Present</em>
          </p>
          <ul>
            <li>
              Applied Agile software delivery and design thinking practices.
            </li>
            <li>Followed industry best practices in software development.</li>
          </ul>
        </div>

        <div>
          <h3>
            Certificate in Technology Product Development (Level 4 - NZQA
            approved)
          </h3>
          <p>
            <strong>Mission Ready HQ - Full Stack Developer Track</strong>
          </p>
          <p>
            <em>Issued March 2024</em>
          </p>
          <ul>
            <li>
              Developed full-stack applications using React.js, Node.js, and
              more.
            </li>
            <li>Built and deployed cloud-integrated web applications.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
