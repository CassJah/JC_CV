import React, { useState } from "react";
import "./Skills.css"; // Custom CSS for styling

const Skills = () => {
  const skills = [
    { name: "React.js", level: 50 },
    { name: "JavaScript", level: 50 },
    { name: "CSS", level: 50 },
    { name: "HTML", level: 50 },
    { name: "Node.js", level: 50 },
    { name: "Express.js", level: 50 },
    { name: "REST APIs", level: 50 },
    { name: "MongoDB", level: 50 },
    { name: "MySQL", level: 50 },
    { name: "AWS", level: 50 },
    { name: "Google Cloud", level: 50 },
    { name: "Docker", level: 50 },
    { name: "Azure", level: 50 },
    { name: "CI/CD (GitHub Actions)", level: 50 },
  ];

  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const handleMouseEnter = (skillName) => {
    setHighlightedSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHighlightedSkill(null);
  };

  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill"
            onMouseEnter={() => handleMouseEnter(skill.name)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar">
              <div
                className={`skill-progress ${
                  highlightedSkill === skill.name ? "highlight" : ""
                }`}
                style={{
                  width:
                    highlightedSkill === skill.name ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
