import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <section className="experience">
        <div className="experience-header">
          <h1>
            PROFESSIONAL <span>JOURNEY</span>
          </h1>
          <span className="experience-tag">— EXPERIENCE</span>
        </div>

        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-date">2023 – Present</div>

            <div className="experience-content">
              <h2>Freelance Creative Artist</h2>
              <p className="company">Nigeria · Remote</p>
              <p className="desc">
                Delivered end-to-end visual production across comics and
                animation, including compositing, coloring, video editing, and
                graphic design. Collaborated with multiple clients to create
                engaging, story-driven visuals while meeting tight deadlines.
              </p>
            </div>

            <div className="experience-tags">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>After Effects</span>
              <span>Premiere Pro</span>
              <span>DaVinci Resolve</span>
            </div>
          </div>

          <div className="divider" />

          <div className="experience-item">
            <div className="experience-date">2024 – Present</div>

            <div className="experience-content">
              <h2>Video Editor</h2>
              <p className="company">Her Immigrant Tale · Canada · Remote</p>
              <p className="desc">
                Manage post-production workflows for digital content, producing
                high-quality videos with strong storytelling and consistent
                branding. Collaborate remotely with international teams to
                deliver engaging visual content at scale.
              </p>
            </div>

            <div className="experience-tags">
              <span>Premiere Pro</span>
              <span>CapCut</span>
            </div>
          </div>

          <div className="divider" />

          <div className="experience-item">
            <div className="experience-date">2022 – 2024</div>

            <div className="experience-content">
              <h2>2D Compositor / Video Editor</h2>
              <p className="company">Spoof Animations · Lagos, Nigeria</p>
              <p className="desc">
                Composited and enhanced 2D animation projects by combining
                footage, effects, and motion graphics into polished final
                visuals. Contributed to projects like Hero Corps, improving
                scene depth, lighting, and overall cinematic quality.
              </p>
            </div>

            <div className="experience-tags">
              <span>After Effects</span>
              <span>Premiere Pro</span>
              <span>DaVinci Resolve</span>
            </div>
          </div>

          <div className="divider" />

          <div className="experience-item">
            <div className="experience-date">2021 – 2022</div>

            <div className="experience-content">
              <h2>Junior 2D Compositor / Colorist</h2>
              <p className="company">Spoof Animations · Lagos, Nigeria</p>
              <p className="desc">
                Supported animation production by assembling scenes, applying
                color, and ensuring visual consistency across shots. Assisted in
                rendering, quality checks, and maintaining organized project
                workflows.
              </p>
            </div>

            <div className="experience-tags">
              <span>After Effects</span>
              <span>Toon Boom</span>
              <span>Photoshop</span>
            </div>
          </div>

          <div className="divider" />

          <div className="experience-item">
            <div className="experience-date">2020 – 2021</div>

            <div className="experience-content">
              <h2>Graphic Designer / Comic Colorist & Letterist</h2>
              <p className="company">Spoof Animations · Lagos, Nigeria</p>
              <p className="desc">
                Designed promotional graphics and comic visuals, including
                coloring and lettering, to enhance storytelling and brand
                identity. Worked closely with creative teams to deliver
                consistent and engaging outputs.
              </p>
            </div>

            <div className="experience-tags">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Clip Studio</span>
            </div>
          </div>
        </div>
      </section>
      <section className="experience">
        <div className="experience-header">
          <span className="experiences-tag">— EDUCATION</span>
        </div>

        <div className="experience-list">
          <div className="experience-item">
            <div className="experience-date">Jun 2023 – Present</div>

            <div className="experience-content">
              <h2>MOSHOOD ABIOLA POLYTECHNIC</h2>
              {/* <p className="company">Mshel Homes Ltd · Abuja, Nigeria</p> */}
              <p className="desc">
                Handled administrative tasks including document management,
                scheduling, and correspondence. Improved office efficiency by
                organizing records and reducing manual workload. Supported team
                coordination and communication, contributing to smoother daily
                operations.
              </p>
            </div>

            <div className="experience-tags">
              <span>Office Administration</span>
              <span>Communication (Written & Verbal)</span>
              <span>Customer Service</span>
            </div>
          </div>

          <div className="divider" />
        </div>
      </section>
    </>
  );
};

export default Experience;
