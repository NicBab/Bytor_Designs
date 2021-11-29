/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import birdRainbow from '../Images/BIRDRNBOW.png'
import bonkerz2 from '../Images/bonkerz2.png'
import firewerks from '../Images/firewerks.png'
import lazardala from '../Images/lazardala.png'
import motherMycelia from '../Images/mother mycelia.png'
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const Portfolio = () => {
    const handle = useFullScreenHandle()


  return (
    <>
      <div className="portfolioPg">
        <Container className="projectCardsContainer">


          <div className="projectLinks" >
           <FullScreen handle={handle}>
            Any fullscreen content here
           </FullScreen>
            <img
            onClick={handle.enter}
              className="projectImg"
              src={birdRainbow}
              alt="bird rainbow"
            />
          </div>



          <div className="projectLinks" >
            <img
              className="projectImg"
              src={bonkerz2}
              alt="bonkerz 2"
            />
          </div>

          <div className="projectLinks" >
            <img
              className="projectImg"
              src={firewerks}
              alt="fire werks"
            />
          </div>

          <div className="projectLinks" >
            <img
              className="projectImg"
              src={lazardala}
              alt="lazar dala"
            />
          </div>

          <div className="projectLinks" >
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
