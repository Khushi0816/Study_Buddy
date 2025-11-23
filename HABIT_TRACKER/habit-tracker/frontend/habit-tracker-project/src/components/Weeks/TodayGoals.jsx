import React from "react";
import "../../styles/week.css";

export default function TodayGoals({ items = [{id:1,title:'Habit 1',done:true},{id:2,title:'Habit 2',done:false}] }) {
  return (
    <aside className="container page-right">
      <div className="today-card">
        <div className="today-title">Today's Goal</div>

        <div style={{ display: "grid", gap: 12 }}>
          {items.map((it) => (
            <div key={it.id} className="goal-item">
              <div>
                <div style={{ fontWeight:700 }}>{it.title}</div>
                <div className="small-muted">Progress</div>
              </div>

             <div className={`status ${it.done ? "status-done" : "status-pending"}`}>
                {it.done ? "Completed" : "Incompleted"}
              </div>

            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
