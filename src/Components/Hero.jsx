import React, { useState, useEffect } from "react";
import "./Hero.css";
import { FiArrowRight } from "react-icons/fi";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";
import Skills from "./Skills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const skills = [
  "Video Editor",
  "2D Compositor",
  "Colorist",
  "Comic Letterist",
  "Graphics Designer",
];

const images = [
  "/12 (1).png",
  "/13 (1).png",
  "/14 (1).png",
  "/15 (1).png",
  "/16 (1).png",
  "/17 (1).png",
];

const Hero = () => {
  const [text, setText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    const typing = setTimeout(() => {
      if (charIndex < currentSkill.length) {
        setText((prev) => prev + currentSkill[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setSkillIndex((prev) => (prev + 1) % skills.length);
        }, 1500);
      }
    }, 80);
    return () => clearTimeout(typing);
  }, [charIndex, skillIndex]);

  return (
    <>
      <section className="hero">
        <div className="hero-bg-glow"></div>

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, <br />
            <span className="hero-name">
              I’m <span>Esther Bamigbade.</span>
            </span>{" "}
            <br />
            <span className="typing">A {text} .</span>
          </h1>

          <p className="hero-text">
            I take ideas that are almost there and turn them into visuals that
            feel complete, clear, and alive. From fixing colors to setting the
            right mood, cleaning up scenes, editing videos, and designing text
            that speaks, <br></br>I focus on the little details that make a big
            difference. Think of me as the person who helps your story look and
            feel exactly how it should.
          </p>

          <div className="buttons">
            <button className="primary" onClick={() => navigate("/about")}>
              About
            </button>
            <button className="primary" onClick={() => navigate("/project")}>
              View Work <FiArrowRight />
            </button>
            <button className="secondary" onClick={() => navigate("/contact")}>
              Let’s Talk
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - NORMAL CAROUSEL */}
        <div className="hero-right">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0} // no gap
            slidesPerView={1} // show only 1 slide at a time
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="hero-card">
                  <img src={img} alt={`Work ${i + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Skills />
      <Stats />
    </>
  );
};

export default Hero;
