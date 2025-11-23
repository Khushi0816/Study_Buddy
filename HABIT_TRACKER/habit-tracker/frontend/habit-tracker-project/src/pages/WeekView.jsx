import React, { useState } from "react";
import Header from "../components/Weeks/Header";
import Tabs from "../components/Weeks/Tabs";
import TodayGoals from "../components/Weeks/TodayGoals";
import HeartButton from "../components/Weeks/HeartButton";
import ProgressBar from "../components/Weeks/ProgressBar";
import "../styles/week.css";

export default function WeekView() {
  const habits = [
    { id: 1, title: "Morning Walk" },
    { id: 2, title: "Read 30 min" },
    { id: 3, title: "Meditate" },
    { id: 4, title: "Learn React" },
  ];

  const [state, setState] = useState(() => {
    let init = {};
    habits.forEach((h) => (init[h.id] = Array(7).fill(0)));
    return init;
  });

  const updateState = (hid, i, val) => {
    setState((prev) => {
      let copy = { ...prev };
      copy[hid] = [...copy[hid]];
      copy[hid][i] = val;
      return copy;
    });
  };

  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="hb-page">
      <Header />
      <Tabs />

      <div className="progress-wrapper">
        <ProgressBar progress={45} />
      </div>

      <div className="page-grid">
        <div className="page-left">
          <div className="week-nav">
            <button className="week-nav-btn">◀</button>
            <span className="small-muted">Mon, 10/11 - Sun, 16/11</span>
            <button className="week-nav-btn">▶</button>
          </div>

          <div className="days-row">
            {days.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className="habits-section">
            {habits.map((h) => (
              <div key={h.id} className="habit-row">
                <div className="habit-title">{h.title}</div>

                <div className="habit-grid">
                  {state[h.id].map((v, i) => (
                    <HeartButton
                      key={i}
                      state={v}
                      onChange={(n) => updateState(h.id, i, n)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <TodayGoals />
      </div>
    </div>
  );
}
