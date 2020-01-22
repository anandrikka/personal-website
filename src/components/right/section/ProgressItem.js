import React from "react";

function ProgressItem({ name, percent }) {
  return (
    <div className="progress-item">
      <span className="progress-title">{name}</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={percent}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${percent}%` }}
        >
          <span className="progress-percent"> {percent/10}</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressItem;
