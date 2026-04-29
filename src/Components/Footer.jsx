import "./Footer.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        
        <p className="footer-top">Got a project in mind?</p>

        <h1 className="footer-main">
          Let’s create something <span>amazing</span>
        </h1>

        {/* BUTTON → ROUTES TO CONTACT PAGE */}
        <button
          className="footer-btn"
          onClick={() => navigate("/contact")}
        >
          Get in touch →
        </button>

        {/* CONTACT INFO */}
        <div className="footer-links">
          <a href="mailto:estherbamigbade17@gmail.com">
            estherbamigbade17@gmail.com
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Esther Bamigbade
        </p>
      </div>
    </footer>
  );
};

export default Footer;