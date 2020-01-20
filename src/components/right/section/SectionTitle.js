import React from "react";

function SectionTitle({ children }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>{children}</h2>
        </div>
      </div>
    </div>
  );
}

export default SectionTitle;
