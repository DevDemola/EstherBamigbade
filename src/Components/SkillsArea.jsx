import React from "react";
import "./SkillsArea.css";

const SkillsArea = () => {
  const skills = [
    "2D Animation Compositing",
    "2D Animation Coloring",
    "Video Editing",
    "Comic Coloring",
    "Flat Coloring",
    "Graphics Design",
    "Comic Lettering",

    "Lettering",
    "Sound Effects (SFX)",
  ];

  return (
    <section className="marquee-section">
      <div className="marquee">
        <div className="marquee-content">
          {skills.concat(skills).map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsArea;
