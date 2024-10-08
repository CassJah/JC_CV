import React from "react";
import "./Projects.css"; // Make sure the path is correct

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Current Projects</h2>

      <div className="project-item">
        <h3>Ground Investigation Field App</h3>
        <p className="description">
          <strong>Description:</strong> A responsive field application with
          offline-first capabilities, designed to streamline geotechnical data
          collection and testing workflows.
        </p>
        <p className="technologies">
          <strong>Technologies:</strong> React.js, Node.js, MongoDB, GPS
          integration, M-Files API
        </p>
        <div className="key-features">
          <strong>Key Features:</strong>
          <ul>
            <li>
              Offline capabilities with automatic data syncing when online.
            </li>
            <li>GPS location tracking for precise test location data.</li>
            <li>
              Integration with M-Files for automated document management and
              data upload.
            </li>
          </ul>
        </div>
        <p className="status">
          <em>
            Currently optimizing the app for scalability and further cloud
            integration.
          </em>
        </p>
      </div>

      <div className="project-item">
        <h3>AI Chatbot for Civil Reports</h3>
        <p className="description">
          <strong>Description:</strong> An AI-powered chatbot that generates
          stormwater and wastewater civil reports, using Azure's cognitive
          services for natural language processing.
        </p>
        <p className="technologies">
          <strong>Technologies:</strong> Azure, React.js, Node.js, Microsoft
          Teams integration
        </p>
        <div className="key-features">
          <strong>Key Features:</strong>
          <ul>
            <li>
              Automated generation of professional civil engineering reports.
            </li>
            <li>
              Utilizes Azure's AI capabilities for accurate report creation
              based on user inputs.
            </li>
            <li>
              Integrated with Microsoft Teams to streamline report collaboration
              within organizations.
            </li>
          </ul>
        </div>
        <p className="status">
          <em>
            Currently enhancing the chatbot's accuracy by training it with
            additional data sets.
          </em>
        </p>
      </div>
    </section>
  );
};

export default Projects;
