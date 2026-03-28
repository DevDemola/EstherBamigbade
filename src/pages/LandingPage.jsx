import React from "react";
import Hero from "../Components/Hero";
import ExpertArea from "../Components/ExpertArea";
import Showreel from "../Components/Showreel";
import ProjectCarousel from "../Components/ProjectCarousel";
import Services from "../Components/Services";
import Reviews from "../Components/Reviews";
// import Stats from "../Components/Stats";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Showreel />
      {/* <Services />
      <ExpertArea /> */}
      <ProjectCarousel />
      <Reviews />
    </div>
  );
};

export default LandingPage;
