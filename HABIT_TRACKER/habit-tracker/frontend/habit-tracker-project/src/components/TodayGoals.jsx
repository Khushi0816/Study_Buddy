import React from 'react';


export default function TodayGoals() {
return (
<div className="w-64 p-4 rounded-2xl shadow bg-white ml-10">
<h2 className="text-lg font-bold mb-4">Today's Goal</h2>


{["Habit 1", "Habit 2"].map((h) => (
<div key={h} className="bg-pink-100 p-3 rounded-xl mb-3 flex justify-between items-center">
<div>
<p className="font-semibold">{h}</p>
<p className="text-xs text-gray-600">Completed</p>
</div>
<span className="text-green-700">✔</span>
</div>
))}
</div>
);
}