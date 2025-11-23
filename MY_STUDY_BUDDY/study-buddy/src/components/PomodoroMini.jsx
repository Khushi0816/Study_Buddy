import { useState, useEffect } from "react";

export default function PomodoroCard() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setTime((t) => t - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (t) =>
    `${String(Math.floor(t / 60)).padStart(2, "0")}:${String(t % 60).padStart(2, "0")}`;

  return (
    <div className="bg-[#0d1117] p-6 rounded-2xl w-full shadow-xl border border-gray-700">
      <h2 className="text-xl font-semibold text-pink-400 mb-4">Pomodoro</h2>

      <div className="text-5xl font-bold text-center text-white mb-6">
        {formatTime(time)}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-pink-500 px-6 py-2 rounded-xl text-white font-medium hover:bg-pink-600 transition"
        >
          {isActive ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setIsActive(false);
            setTime(25 * 60);
          }}
          className="bg-gray-700 px-6 py-2 rounded-xl text-white font-medium hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
