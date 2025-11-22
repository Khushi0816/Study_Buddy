import "./Tabs.css";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "week" ? "active" : ""}
        onClick={() => setActiveTab("week")}
      >
        Week
      </button>

      <button
        className={activeTab === "month" ? "active" : ""}
        onClick={() => setActiveTab("month")}
      >
        Month
      </button>

      <button
        className={activeTab === "notes" ? "active" : ""}
        onClick={() => setActiveTab("notes")}
      >
        Notes
      </button>

      <button className="add-btn">+ Add Habit</button>
    </div>
  );
}

export default Tabs;
