import "./Header.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <div className="header-container">
      <div className="left">
        <h2 className="greeting">Hey there, Bloom 🌸</h2>
      </div>

      <div className="right">
        <div className="date-box">
          <FaRegCalendarAlt />
          <span>Day, Nov 11</span>
        </div>

        <FaUserCircle className="profile-icon" />
      </div>
    </div>
  );
}

export default Header;
