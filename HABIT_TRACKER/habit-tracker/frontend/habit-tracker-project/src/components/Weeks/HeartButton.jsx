import React from "react";
import "../../styles/week.css";

/*
 Using the uploaded files from your workspace so it works immediately:
 - full heart: /mnt/data/heart.png
 - broken heart: /mnt/data/A_flat,_geometric_digital_illustration_features_a_.png
 If you move them to src/assets, update the URLs accordingly.
*/
const HEART_FILLED = "../src/assets/heart.png";
const HEART_BROKEN = "../src/assets/broken-heart.png";

export default function HeartButton({ state = 0, onChange = () => {} }) {
  // state: 0 = empty, 1 = full, 2 = broken
  const handleClick = () => {
    const next = (state + 1) % 3;
    onChange(next);
  };

  return (
    <button
      className={`heart-btn heart-state-${state}`}
      onClick={handleClick}
      aria-pressed={state === 1}
      title={state === 0 ? "Not marked" : state === 1 ? "Done" : "Missed"}
    >
      {state === 1 && <img src={HEART_FILLED} alt="filled heart" />}
      {state === 2 && <img src={HEART_BROKEN} alt="broken heart" />}
      {/* state 0 intentionally empty (button background only) */}
    </button>
  );
}
