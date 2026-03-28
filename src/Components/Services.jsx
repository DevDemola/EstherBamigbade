import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "2D Animation Compositing",
      details: [
        "Scene assembly & layering",
        " Character and background integration",
        "Effects compositing (light, glow, particles, VFX)",
        "Camera moves , depth and Masking",
        "Final polish & render optimization",
      ],
    },
    {
      title: "2D Animation Coloring",
      details: [
        "Base Color(Flatting)",
        "Shading and Highlight",
        "Refined Edges and Details",
        "Final Exports / Render",
      ],
    },
    {
      title: "Video Editing",
      details: [
        "Story-driven cuts",
        "Transitions  & pacing",
        "Sound sync & cleanup",
        "Color Grading",
        "Final export optimization",
      ],
    },
    {
      title: "Comic Coloring",
      details: [
        "Flat coloring",
        "Shading and Lighting",
        "Mood & atmosphere",
        "Print & digital prep",
      ],
    },
    {
      title: "Graphics Design",
      details: ["Posters and Flyers", "Social media designs"],
    },
    {
      title: "Comic Lettering",
      details: [
        "Script Review",
        "Ballon Design and  Placements",
        "LETTERING",
        "Sound Effects(SFX)",
        "Flow and Readability check",
        "Final Polish and Exports",
      ],
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services">
      <h2>SERVICES</h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-wrapper">
            <div className="service-card" onClick={() => toggle(index)}>
              <span>{service.title}</span>
              <span className="plus">{activeIndex === index ? "-" : "+"}</span>
            </div>

            {activeIndex === index && (
              <div className="dropdown">
                <ul>
                  {service.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
