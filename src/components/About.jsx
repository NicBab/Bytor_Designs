import flierEdit from "../Images/flierEdit.png";
import "./css/About.css";
import { Link } from "react-router-dom";
import { FollowIcons } from "../components/index";

const About = () => {
  return (
    <div className="aboutPg">
      <div className="about-top"></div>
      <img className="aboutImg" src={flierEdit} alt="" />
      <div className="about-bottom"></div>
      <div className="about-desc-container">
        <b>ABOUT ME</b>
        <p>
          Creator of visionary and psychedelic art, using photo manipulation
          inspired by natural symmetry, culture, and music. With a passion for
          logo, marketing material design, vector art, and video editing.
        </p>
        <FollowIcons />
      </div>

      <Link to="/about">
        <button className="moreAboutBtn">MORE ABOUT ME</button>
      </Link>
    </div>
  );
};

export default About;
