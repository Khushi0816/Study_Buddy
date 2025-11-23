import React from 'react'; // Add this line

export default function DaysRow() {
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  return (
    <div className="grid grid-cols-8 mt-6 font-medium text-gray-600">
      <div></div>
      {days.map((d, i) => (
        <div key={i} className="text-center min-w-[60px]">
          {d}
        </div>
      ))}
    </div>
  );
}
