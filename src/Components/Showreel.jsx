import React, { useRef, useState } from "react";
import "./Showreel.css";

const Showreel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="showreel">
      <div className="showreel-container">
        <h2>SHOWREEL</h2>

        <div className="video-wrapper">
          {/* VIDEO */}
          <video
            ref={videoRef}
            className="video"
            src="https://res.cloudinary.com/dcapipfeg/video/upload/f_auto,q_auto:good,w_1920/FINAL_RENDER_2_ejrchs.mp4"
            muted   // VERY IMPORTANT (fixes play issues)
            loop
            playsInline
          />

          {/* PLAY BUTTON */}
          {!isPlaying && (
            <button className="play-button" onClick={handlePlay}>
              ▶
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Showreel;