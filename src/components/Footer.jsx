import React from "react";
import { Link } from "react-router-dom";
import FollowIcons from './FollowIcons'
import "./css/Footer.css";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="site-footer">
          <FollowIcons />
          <section className="footer-links">
            <h2>About Me</h2>
            <Link to="/history">History</Link>
            <Link to="/blog">Blog</Link>
          </section>
          <div className="stellar">
          @2021 Stellar Innovation Development
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
