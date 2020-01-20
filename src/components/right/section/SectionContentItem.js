import React from "react";

function SectionContentItem({size, classes, title, description }) {
  return (
    <div className={`col-md-${size}`}>
      <div className={classes}>
        <h3>{title}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionContentItem;
