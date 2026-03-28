import React from "react";
import "./Showreel.css";

const Showreel = () => {
  return (
    <section className="showreel">
      <div className="showreel-container">
        <h2>SHOWREEL</h2>
       

        <div className="video-wrapper">
          <video
            src="https://res.cloudinary.com/dcapipfeg/video/upload/f_auto,q_auto:good,w_1920/FINAL_RENDER_2_ejrchs.mp4"
            // controls
            autoPlay
            loop
            // muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

export default Showreel;
