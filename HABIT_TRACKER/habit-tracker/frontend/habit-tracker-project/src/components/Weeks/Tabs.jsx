import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/week.css";

export default function Tabs() {
  const loc = useLocation();
  const active =
    loc.pathname === "/month"
      ? "month"
      : loc.pathname === "/notes"
      ? "notes"
      : "week";

  return (
    <>
      <div className="hb-hello">
        Hey there, Bloom <span className="hb-flower">🌸</span>
      </div>

      <div className="hb-tabs-row">
        <div className="tabs">
          <Link to="/" className={`tab ${active === "week" ? "active" : ""}`}>
            Week
          </Link>
          <Link
            to="/month"
            className={`tab ${active === "month" ? "active" : ""}`}
          >
            Month
          </Link>
          <Link
            to="/notes"
            className={`tab ${active === "notes" ? "active" : ""}`}
          >
            Notes
          </Link>
        </div>

        <button className="add-habit-small">+ Add Habit</button>
      </div>
    </>
  );
}
