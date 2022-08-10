import React from "react";
import "./css/ImgModel.css";
import { Link } from "react-router-dom";
import { gallery } from "../data";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const Portfolio = () => {
  let Gal = gallery.sort(() => Math.random() - 0.5);
  return (
    <>
      <div className="portfolioPg">
        <div className="p-img-container">
          <ImageList variant="masonry" cols={5} gap={8}>
            {Gal.map((item, index) => (
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
      </div>
      <Link to="/portfolio">
        <button className="portfoContactBtn">VIEW PORTFOLIO</button>
      </Link>
    </>
  );
};

export default Portfolio;
