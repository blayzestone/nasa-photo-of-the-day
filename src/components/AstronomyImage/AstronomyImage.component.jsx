import React from "react";
import styled from "styled-components";
// import "./AstronomyImage.style.css";

const Image = styled.img`
  width: 100%;
`;

function AstronomyImage({ imageSource, imageAltText }) {
  return <Image src={imageSource} alt={imageAltText}/>;
}

export default AstronomyImage;