import React from 'react';

export default function HabitRow({ name, heart }) {
  return (
    <div className="grid grid-cols-8 items-center gap-4">
      
      {/* Habit name */}
      <p className="text-gray-700 font-semibold">{name}</p>

      {/* 7 hearts */}
      {[...Array(7)].map((_, idx) => (
        <img 
          key={idx}
          src={heart}
          alt="heart"
          className="w-7 mx-auto"
        />
      ))}
    </div>
  );
}
