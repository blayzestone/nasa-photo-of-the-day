import React from "react";

function AstronomyMeta({date, copyright}) {
  return(
    <div className="meta-data-container">
      <span>{date}</span>
      <small>{copyright}</small>
    </div>
  );
}

export default AstronomyMeta;