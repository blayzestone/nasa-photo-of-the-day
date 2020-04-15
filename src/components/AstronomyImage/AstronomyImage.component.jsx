import React from "react";

function AstronomyImage({ imageSource, imageAltText }) {

  if (!imageSource) return <h3>Loading...</h3>;

  return(
    <img src={imageSource} alt={imageAltText}/>
  );
}

export default AstronomyImage;