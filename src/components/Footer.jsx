import React from "react";
import { Link } from "react-router-dom";
import FollowIcons from './FollowIcons'
import "./css/Footer.css";
import gearsPurple from "../Images/gearsPurple.png"

const Footer = () => {
  return (
    <>
      <div>
        <footer className="site-footer">
          <FollowIcons />
          <section className="footer-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/resume">RESUME</Link>
            <Link to="/contact">CONTACT</Link>
          </section>
          <div className="stellar">
          <img src={gearsPurple} alt="" className="gearsLogo"/>
          @2022 Stellar Development
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
