import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "./ProjectCarousel.css";

const projects = [
  {
    title: "Project One",
    image: "/C 3.png",
    path: "/projects/project-one",
    description: "Video Editing & Compositing",
  },
  {
    title: "Project Two",
    image: "/C 2.png",
    path: "/projects/project-two",
    description: "2D Animation & Color Grading",
  },
  {
    title: "Project Three",
    image: "/C 1.png",
    path: "/projects/project-three",
    description: "Comics Lettering & Graphics",
  },
  {
    title: "Project Four",
    image: "/CL 4.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/L 1.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/L 3.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/L 2.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/G 2.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/G 1.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
  {
    title: "Project Four",
    image: "/G 3.png",
    path: "/projects/project-four",
    description: "Full Post-Production Workflow",
  },
];

const ProjectCarousel = () => {
  return (
    <section className="carousel-section">
      <h2>PROJECTS</h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <Link to={project.path}>
              <div className="carousel-card">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;