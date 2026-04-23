import React, { useState } from "react";
import "./Project.css";

const categories = [
  "All",
  "Composition",
  "Video Editing",
  "Graphics Design",
  "Comic Colouring",
  "Comic Lettering",
  // "Animation Coloring",
];

const projects = [
  {
    category: "Composition",
    // name: "Cinematic Edit",
    videoUrl:
      "https://res.cloudinary.com/dcapipfeg/video/upload/v1768574626/WhatsApp_Video_2026-01-10_at_1.46.10_PM_kqlvzl.mp4",
  },
  {
    category: "Video Editing",
    // name: "Music Video",
    videoUrl:
      "https://res.cloudinary.com/dcapipfeg/video/upload/f_auto,q_auto:good,w_1920/FINAL_RENDER_2_ejrchs.mp4",
  },

  // GRAPHICS DESIGN (GROUPED BY COMPANY)
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Brand Poster 1",
    imageUrl: "RENDACON-F-3.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Brand Poster 2",
    imageUrl: "RENDACON-F-9a.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Brand Poster 3",
    imageUrl: "RENDACON-F-9b.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Campaign Design",
    imageUrl: "RENDACON-F-11.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Logo Concept",
    imageUrl: "RENDACON-F-14.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Logo Concept",
    imageUrl: "RENDACON-F-15.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Logo Concept",
    imageUrl: "RENDACON-F-16.jpg",
  },
  {
    category: "Graphics Design",
    company: "RENDACON",
    // name: "Logo Concept",
    imageUrl: "RENDACON-F-17.jpg",
  },
  
  {
    category: "Graphics Design",
    company: "IBADAN FAN EXPO",
    // name: "Logo Concept",
    imageUrl: "IFE25GFX-1.jpg",
  },
  {
    category: "Graphics Design",
    company: "IBADAN FAN EXPO",
    // name: "Logo Concept",
    imageUrl: "IFE25GFX-6g.jpg",
  },
  {
    category: "Graphics Design",
    company: "IBADAN FAN EXPO",
    // name: "Logo Concept",
    imageUrl: "IFE25GFX-10.jpg",
  },
  {
    category: "Graphics Design",
    company: "IBADAN FAN EXPO",
    // name: "Logo Concept",
    imageUrl: "IFE25GFX-3c.jpg",
  },
  {
    category: "Graphics Design",
    company: "IBADAN FAN EXPO",
    // name: "Logo Concept",
    imageUrl: "IFE25GFX-4c.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 1.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 3a.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 6.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 8a.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 8b.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 12c.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 12b.jpg",
  },
  {
    category: "Graphics Design",
    company: "AFRICA COMIC CONVENTION",
    // name: "Logo Concept",
    imageUrl: "ACC - F - 9.jpg",
  },
  

  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "CL 1.png",
  },

  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "CL 2.png",
  },

  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "CL 3.png",
  },

  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "CL 4.png",
  },
  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "C 1.png",
  },
  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "C 2.png",
  },
  {
    category: "Comic Colouring",
    // name: "Comic Coloring Sample",
    imageUrl: "C 3.png",
  },
  {
    category: "Comic Lettering",
    name: "Speech Layout",
    imageUrl: "L 1.png",
  },
  {
    category: "Comic Lettering",
    name: "Speech Layout",
    imageUrl: "L 2.png",
  },
  {
    category: "Comic Lettering",
    name: "Speech Layout",
    imageUrl: "L 3.png",
  },
  {
    category: "Comic Lettering",
    name: "Speech Layout",
    imageUrl: "14 (1).png",
  },
  // {
  //   category: "Animation Coloring",
  //   name: "2D Animation Frame",
  //   imageUrl: "https://via.placeholder.com/400",
  // },
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // GROUP GRAPHICS BY COMPANY
  const groupedGraphics = projects
    .filter((p) => p.category === "Graphics Design")
    .reduce((acc, project) => {
      const company = project.company || "Others";

      if (!acc[company]) {
        acc[company] = [];
      }

      acc[company].push(project);
      return acc;
    }, {});

  // FILTER FOR NON-GRAPHICS
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="projects">
      <h1 className="title">Projects</h1>

      {/* CATEGORY FILTER */}
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

      {/* GRAPHICS DESIGN GROUPED VIEW */}
      {activeCategory === "Graphics Design" ? (
        <div className="graphics-groups">
          {Object.entries(groupedGraphics).map(([company, items]) => (
            <div key={company} className="company-group">
              {/* COMPANY TITLE */}
              <h3 className="company-title">{company}</h3>

              {/* GRID */}
              <div className="grid">
                {items.map((project, index) => (
                  <div
                    className="card"
                    key={index}
                    onClick={() => setSelectedProject(project)}
                  >
                    <img src={project.imageUrl} alt={project.name} />

                    <div className="overlay">
                      <p>{project.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* NORMAL GRID FOR OTHER CATEGORIES */
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

              <div className="overlay">
                <p>{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MODAL */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.videoUrl && (
              <video src={selectedProject.videoUrl} controls autoPlay />
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