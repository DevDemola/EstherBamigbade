import Experience from "../Components/Experience";
import ExpertArea from "../Components/ExpertArea";
import Services from "../Components/Services";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-card">
        {/* Left image */}
        <div className="about-image">
          <img src="/profile.avif" alt="Esther Bamigbade" />
        </div>

        {/* Right content */}
        <div className="about-content">
          <p className="about-intro">
            My name is <strong>Esther Bamigbade.</strong> I work as a
            Post-Production Artist and Visual Storyteller in Lagos, Nigeria. I
            have about five years of experience working on creative projects. I
            focus on the final stage of production, where I take raw ideas and
            turn them into polished, professional visuals that tell a clear
            story.
            <p>
              I do video editing and combine visuals in a smooth way so
              everything flows naturally. I also work on color and lighting to
              create the right mood for videos or designs. In addition, I design
              text and lettering, especially for comics and brands, to help give
              them a unique voice. I enjoy working closely with teams.
            </p>
            <p>
              I’m flexible and able to handle both design and editing tasks
              effectively. I take feedback seriously and use it to improve the
              final result. I’ve worked on different types of projects, both
              locally and internationally, and I always make sure to deliver
              high-quality work on time.
            </p>
          </p>

          <div className="about-actions">
            <button className="btn">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
      <Services />
     <ExpertArea/>
     <Experience/>
      <section className="cta">
        <h3 className="cta-title">Let’s Work Together</h3>

        <div className="cta-action">
          <span>LETS TALK</span>
        </div>
      </section>
    </section>
  );
};

export default About;
