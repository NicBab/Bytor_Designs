import React from "react";
import "./css/Portfolio.css";
import { Container } from "react-bootstrap";
import { gallery } from "../data";

const Portfolio = () => {
  return (
    <>
      <div className="portfolioPg">
        <Container className="projectCardsContainer">
          {gallery.map((item) => (
            <div className="projectLinks">
              <img className="projectImg" src={item.img} alt="" />
            </div>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
