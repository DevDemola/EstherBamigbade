import React from "react";
import "./ExpertArea.css";
// import NavButtons from "./NavButtons";

const ExpertArea = () => {
  return (
    <>
    <section className="expert">
      <div className="expert-container">
         <div className="hero-bg-glow"></div>
        <h2>AREA OF EXPERTISE</h2>

        <div className="expert-tools">
          {/* After Effects */}
          <div className="tool">
            <img
              src="/after-effects.png"
              alt="After Effects"
              className="custom-img"
            />
            <span>After Effects</span>
          </div>

          {/* Premiere Pro */}
          <div className="tool">
            <img
              src="/premiere-pro.png"
              alt="Premiere Pro"
              className="custom-img"
            />
            <span>Premiere Pro</span>
          </div>

          {/* Photoshop */}
          <div className="tool">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="Photoshop"
              className="custom-img"
            />
            <span>Photoshop</span>
          </div>

          {/* Illustrator */}
          <div className="tool">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
              alt="Illustrator"
              className="custom-img"
            />
            <span>Illustrator</span>
          </div>

          {/* DaVinci Resolve */}
          <div className="tool">
            <img
              src="/DaVinci_Resolve_Studio.png"
              alt="DaVinci Resolve"
              className="custom-img"
            />
            <span>DaVinci Resolve</span>
          </div>

          {/* CapCut */}
          <div className="tool">
            <img
              src="/CapCut-Logo-Video-Editing-App-Icon.png"
              alt="CapCut"
              className="custom-img"
            />
            <span>CapCut</span>
          </div>

          {/* Clip Studio */}
          <div className="tool">
            <img
              src="https://play-lh.googleusercontent.com/X_tdMAC-1SnBCZpb2lN7WRzOpLA4-sjT_uG82OLLhlIyXF0DcjEuN7XxnZUoUh6BpGP1voWO7SjwY4coSKFKHg"
              alt="Clip Studio"
              className="custom-img"
            />
            <span>Clip Studio</span>
          </div>

          {/* Toon Boom */}
          <div className="tool">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5JLTj4LMNSbdiwdxRae5LH_B9dhWBT3r2eg&s"
              alt="Toon Boom"
              className="custom-img"
            />
            <span>Toon Boom</span>
          </div>
        </div>
      </div>
    </section>
    {/* <NavButtons/> */}
    </>
  );
};

export default ExpertArea;