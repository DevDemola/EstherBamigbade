import React from "react";
import "./NavButtons.css";
import { Navigate, useNavigate } from "react-router-dom";

const NavButtons = () => {
const Navigate =useNavigate("")

  return (
    <section className="nav-buttons-section">
      <div className="nav-buttons">
        <button className="btn-red" onClick={() => Navigate("/about")}>
          About
        </button>
        <button className="btn-white" onClick={() => Navigate("/contact")}>
          Contact
        </button>
      </div>
    </section>
  );
};

export default NavButtons;