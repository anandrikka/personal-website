import React from "react";

function ExperienceItem({ duration, level1, level2, level3 }) {
  return (
    <div className="content-item">
      <small>{duration}</small>
      <h3>{level1}</h3>
      <h4>{level2}</h4>
      <p>{level3}</p>
    </div>
  );
}

export default ExperienceItem;

