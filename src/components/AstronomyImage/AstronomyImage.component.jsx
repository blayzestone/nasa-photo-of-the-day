import React from "react";
import "./AstronomyImage.style.css";

function AstronomyImage({ imageSource, imageAltText }) {
  return(
    <div className="astronomy-image-container">
      <img src={imageSource} alt={imageAltText}/>
    </div>
  );
}

export default AstronomyImage;