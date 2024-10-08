import React, { useState } from "react";
import "./Interests.css"; // Ensure you have the necessary styles

const Interests = () => {
  // State to track the hovered interest
  const [hoveredInterest, setHoveredInterest] = useState(null);

  return (
    <section className={`interests ${hoveredInterest}`}>
      <h2 className="section-title">Personal Interests</h2>
      <ul className="interests-list">
        <li
          className="electric-skateboarding"
          onMouseEnter={() => setHoveredInterest("electric-skateboarding")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Electric Skateboarding
        </li>
        <li
          className="geotechnical-engineering"
          onMouseEnter={() => setHoveredInterest("geotechnical-engineering")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Geotechnical Engineering
        </li>
        <li
          className="software-development"
          onMouseEnter={() => setHoveredInterest("software-development")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Software Development & Tech Innovations
        </li>
        <li
          className="travel-adventures"
          onMouseEnter={() => setHoveredInterest("travel-adventures")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Travel and Outdoor Adventures
        </li>
        <li
          className="surf-culture"
          onMouseEnter={() => setHoveredInterest("surf-culture")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Surf Culture
        </li>
        <li
          className="business"
          onMouseEnter={() => setHoveredInterest("business")}
          onMouseLeave={() => setHoveredInterest(null)}
        >
          Business
        </li>
      </ul>
    </section>
  );
};

export default Interests;
