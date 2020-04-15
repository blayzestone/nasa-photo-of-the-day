import React from "react";

function AstronomyImage({ imageSource, imageAltText }) {
  return(
    <img src={imageSource} alt={imageAltText}/>
  );
}

export default AstronomyImage;