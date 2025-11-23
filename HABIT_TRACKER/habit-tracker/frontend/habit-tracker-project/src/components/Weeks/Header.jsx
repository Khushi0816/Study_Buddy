import React from "react";
import "../../styles/week.css";
import Logo from "./HabitBloomLogo";
import CalendarIcon from "../../assets/Flower2.png";

export default function Header() {
  return (
    <header className="hb-header">
      <div className="hb-header-left">
        <Logo />
      </div>

      <div className="hb-header-right">
        <img src={CalendarIcon} alt="cal" className="hb-cal-icon" />
        <span className="hb-date">Day, Nov 11</span>
        <div className="hb-emoji">🙂</div>
      </div>
    </header>
  );
}
