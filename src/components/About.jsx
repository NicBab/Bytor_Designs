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
          Bytor Design was created by Dylan Nicholson. Dylan is from South
          Louisiana, where he’s spent years growing and cultivating his artistic
          style in multiple mediums. He creates visionary and psychedelic art
          using photo manipulation inspired by natural symmetry, culture, and
          music. He is also passionate about vector art, logo and marketing
          material design, and video editing. When he’s not designing original
          pieces or bringing someone’s brand vision to life, you can find Dylan
          in the kitchen, crafting his own recipes as a professionally-trained
          chef.
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
