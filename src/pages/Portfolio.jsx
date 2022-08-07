import React from "react";
import "./css/Portfolio.css";
// import { Container } from "react-bootstrap";
import { gallery } from "../data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Portfolio = () => {
  return (
    <>
      <div className="portfolioPg">
        <ImageList variant="masonry" cols={3} gap={8}>
          {gallery.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
};

export default Portfolio;

