import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop/>
      <main className="page-layout">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
