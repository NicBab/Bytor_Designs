import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import birdRainbow from "../Images/BIRDRNBOW.png";
import bonkerz2 from "../Images/bonkerz2.png";
import firewerks from "../Images/firewerks.png";
import lazardala from "../Images/lazardala.png";
import motherMycelia from "../Images/mother mycelia.png";
import birdbones from "../Images/birdbones.jpg"
import crclspstr_ps from "../Images/crclspstr_ps.jpg"
import flier from "../Images/flier.jpg"
import newVectorCharacter from "../Images/new_vector_character.png"
import headsplosion_01 from "../Images/headsplosion_01.jpg"
import newCollageScience from "../Images/newcollagescience.jpg"

const Portfolio = () => {
  return (
    <>
      <div className="portfolioPg">
        <Container className="projectCardsContainer">

        <div className="projectLinks">
            <img 
              className="projectImg" 
              src={crclspstr_ps} 
              alt="crclspstr ps" 
            />
          </div>

        <div className="projectLinks">
            <img 
              className="projectImg" 
              src={flier} 
              alt="flier" 
            />
          </div>

        <div className="projectLinks">
            <img 
              className="projectImg" 
              src={newVectorCharacter} 
              alt="new Vector Character" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={headsplosion_01} 
              alt="head splosion" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={newCollageScience} 
              alt="new collage science" 
            />
          </div>

        <div className="projectLinks">
            <img 
              className="projectImg" 
              src={birdbones} 
              alt="bird bones" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={birdRainbow} 
              alt="bird rainbow" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={bonkerz2} 
              alt="bonkerz 2" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={firewerks} 
              alt="fire werks" 
            />
          </div>

          <div className="projectLinks">
            <img 
              className="projectImg" 
              src={lazardala} 
              alt="lazar dala" 
            />
          </div>

          <div className="projectLinks">
            <img
              className="projectImg"
              src={motherMycelia}
              alt="mother mycelia"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
