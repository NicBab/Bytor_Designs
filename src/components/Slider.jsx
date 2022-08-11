import { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { gallery } from "../data";

const Container = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #61f25c13;
  margin: 40px 0px 40px 0px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-image: linear-gradient(to bottom left, #8e4d9c, #35073fc2);
    color: white;
  }
`;

const Wrapper = styled.div`

  display: flex;
  align-items: center;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 500px;
  width: 500px;
  flex: 1;
  overflow: hidden;

  margin: 50px;
  background-color: #999;
  border-radius: 10px;
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`

`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : gallery.length);
    } else {
      setSlideIndex(slideIndex < gallery.length ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {gallery.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;

// bg={item.bg}
