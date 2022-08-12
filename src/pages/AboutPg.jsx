import React from "react";
import "./css/AboutPg.css";
import newVecChar from "../Images/newVecChar.png";
import { FollowIcons } from "../components/index"

const AboutPg = () => {
  return (
    <div className="about-Pg">
      <div className="about-Pg-Bg">
        <img src={newVecChar} alt="" className="bg-img" />
      </div>
      <div className="about-bio-container">
        <p className="bio-P">
          Bytor Design was created by Dylan Nicholson. Dylan is from South
          Louisiana, where he’s spent years growing and cultivating his artistic
          style in multiple mediums. When he’s not designing original pieces or
          bringing someone’s brand vision to life, you can find Dylan in the
          kitchen, crafting his own recipes as a professionally-trained chef.
          <FollowIcons />
        </p>
        
      </div>
    </div>
  );
};

export default AboutPg;
