import React from "react";
import Flower from "../../assets/flower1.png"; 
import "../../styles/week.css";

export default function ProgressBar({ progress }) {
  const fillColor = progress === 0 ? "#BDCE62" : "#F6D6DC";

  return (
    <div className="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: fillColor
          }}
        ></div>

        <img
          src={Flower}
          alt="flower"
          className="progress-flower"
          style={{
            left: `calc(${progress}% - 4px)`
          }}
        />
      </div>
    </div>
  );
}
