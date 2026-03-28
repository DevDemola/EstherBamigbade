import React, { useState } from "react";
import "./Project.css";

const categories = [
  "All",
  "Composition",
  "Video Editing",
  "Graphics Design",
  "Comic Colouring",
  "Comic Lettering",
  "Animation Coloring",
];

const projects = [
  {
    category: "Composition",
    name: "Cinematic Edit",
    videoUrl:
      "https://res.cloudinary.com/dcapipfeg/video/upload/v1768574626/WhatsApp_Video_2026-01-10_at_1.46.10_PM_kqlvzl.mp4",
  },
  {
    category: "Video Editing",
    name: "Music Video",
    videoUrl:
      "https://res.cloudinary.com/dcapipfeg/video/upload/f_auto,q_auto:good,w_1920/FINAL_RENDER_2_ejrchs.mp4",
  },
  {
    category: "Graphics Design",
    name: "Brand Poster",
    imageUrl: "RENDACON-F-3.jpg",
  },
  {
    category: "Graphics Design",
    name: "Brand Poster",
    imageUrl: "RENDACON-F-9a.jpg",
  },
  {
    category: "Graphics Design",
    name: "Brand Poster",
    imageUrl: "RENDACON-F-9b.jpg",
  },
  {
    category: "Graphics Design",
    name: "Brand Poster",
    imageUrl: "RENDACON-F-11.jpg",
  },
  {
    category: "Graphics Design",
    name: "Brand Poster",
    imageUrl: "RENDACON-F-14.jpg",
  },
  {
    category: "Comic Colouring",
    name: "Comic Coloring Sample",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    category: "Comic Lettering",
    name: "Speech Layout",
    imageUrl: "https://via.placeholder.com/400",
  },
  {
    category: "Animation Coloring",
    name: "2D Animation Frame",
    imageUrl: "https://via.placeholder.com/400",
  },
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects">
      <h1 className="title">Projects</h1>

      {/* FILTER BUTTONS */}
      <div className="filters">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid">
        {filteredProjects.map((project, index) => (
          <div
            className="card"
            key={index}
            onClick={() => setSelectedProject(project)}
          >
            {project.videoUrl && (
              <video
                src={project.videoUrl}
                muted
                loop
                autoPlay
                playsInline
              />
            )}

            {project.imageUrl && (
              <img src={project.imageUrl} alt={project.name} />
            )}

            {/* HOVER TEXT */}
            <div className="overlay">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODAL */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.videoUrl && (
              <video
                src={selectedProject.videoUrl}
                controls
                autoPlay
              />
            )}

            {selectedProject.imageUrl && (
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.name}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;