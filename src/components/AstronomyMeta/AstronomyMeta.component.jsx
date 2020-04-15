import React from "react";
import "./AstronomyMeta.style.css";

function AstronomyMeta({date, copyright}) {
  return(
    <div className="meta-data-container">
      <span>{date}</span>
      <span>@ {copyright}</span>
    </div>
  );
}

export default AstronomyMeta;