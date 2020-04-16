import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

function AstronomyImage({ imageSource, imageAltText }) {
  return <Image src={imageSource} alt={imageAltText}/>;
}

export default AstronomyImage;