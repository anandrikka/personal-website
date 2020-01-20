import React from "react";

function AcademicaItem({ level1, level2, level3, link }) {
  return (
    <div className="content-item">
      <h3>
        {level1} {"  "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-external-link" />
        </a>
      </h3>
      <h4>{level2}</h4>
      <p />
      <p>{level3}</p>
    </div>
  );
}

export default AcademicaItem;
