import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Esther Bamigbade</p>

        <p className="footer-role">
          Compositor · {" "} Colorist . {" "}Video Editor . {" "} Graphics Designer
        </p>

        <div className="footer-socials">
          {/* <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a> */}
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:estherbamigbade17@gmail.com">
            Email
          </a>
        </div>
      </div>

      <span className="footer-copy">
        © {new Date().getFullYear()} All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
