import React from "react";
import "./css/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navLinks">
      <Link to="/" className="navLink">
        HOME
      </Link>
      <Link to="/about" className="navLink">
        ABOUT
      </Link>
      <Link to="/portfolio" className="navLink">
        PORTFOLIO
      </Link>
      <Link to="/resume" className="navLink">
        RESUME
      </Link>
      <Link to="/contact" className="navLink">
        CONTACT
      </Link>
    </div>
  );
};

export default Nav;
