import React, { useEffect, useState } from "react";

export default function PomodoroMini(){
  const [time, setTime] = useState(25*60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let t;
    if (running) {
      t = setInterval(() => setTime(s => s-1), 1000);
    }
    return () => clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (time <= 0) {
      setRunning(false);
      setTime(25*60);
      // you can add notification sound here
    }
  }, [time]);

  const fmt = (s) => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

  return (
    <div className="card p-4">
      <div className="flex justify-between items-start">
        <h4 className="font-header">Pomodoro</h4>
        <span className="text-sm text-white/70">Focus</span>
      </div>

      <div className="my-4 text-center text-3xl font-bold">{fmt(time)}</div>

      <div className="flex gap-3">
        <button onClick={() => setRunning(r => !r)} className="flex-1 btn-accent">
          {running ? "Pause" : "Start"}
        </button>
        <button onClick={() => { setRunning(false); setTime(25*60); }} className="px-4 py-2 bg-white/3 rounded-lg">Reset</button>
      </div>
    </div>
  );
}
