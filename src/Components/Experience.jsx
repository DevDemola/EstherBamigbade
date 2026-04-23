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
            <div className="experience-date">Jun 2023 – Present</div>

            <div className="experience-content">
              <h2>Senior Frontend Developer</h2>
              <p className="company">Mshel Homes Ltd · Abuja, Nigeria</p>
              <p className="desc">
                Led end-to-end development of company website driving 60%
                increase in lead generation. Designed Expense Management System
                with real-time dashboard reducing manual data entry by 70%.
                Co-developed HR Appraisal Dashboard cutting processing time by
                59%.
              </p>
            </div>

            <div className="experience-tags">
              <span>Angular</span>
              <span>Supabase</span>
              <span>TypeScript</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="divider" />

          <div className="experience-item">
            <div className="experience-date">Mar 2025 – Present</div>

            <div className="experience-content">
              <h2>Frontend Developer</h2>
              <p className="company">Mshel Foundation · Nigeria</p>
              <p className="desc">
                Developed web application for NGO operations including donor
                management, volunteer coordination, and impact reporting.
              </p>
            </div>

            <div className="experience-tags">
              <span>Vue.js</span>
              <span>JavaScript</span>
              <span>Tailwind CSS</span>
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
