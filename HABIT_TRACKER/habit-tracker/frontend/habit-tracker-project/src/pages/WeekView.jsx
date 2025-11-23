import React, { useState } from 'react';
import HabitBloomLogo from '../components/Weeks/HabitBloomLogo';
import Tabs from '../components/Weeks/Tabs';
import WeekHeader from "../components/Weeks/WeekHeader";
import DaysOfWeek from '../components/Weeks/DaysOfWeek';
import HabitRow from '../components/Weeks/HabitRow';
import TodayGoals from '../components/Weeks/TodayGoals';
import heart from '../assets/heart.svg';

export default function WeekView() {

  const [activeTab, setActiveTab] = useState("week");

  return (
    <div className="p-10 bg-[#FEF9F5] min-h-screen font-karla">

      {/* Logo */}
      <HabitBloomLogo />

      {/* Greeting */}
      <h2 className="text-xl mt-2 text-green-600 font-baloo flex items-center gap-2">
        Hey there, Bloom <span>🌸</span>
      </h2>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Week navigation */}
      <WeekHeader />

      {/* Days (Mon–Sun) */}
      <DaysOfWeek />

      {/* Habit Rows */}
      <div className="mt-4 space-y-6">
        <HabitRow name="Habit 1" heart={heart} />
        <HabitRow name="Habit 2" heart={heart} />
        <HabitRow name="Habit 3" heart={heart} />
        <HabitRow name="Habit 4" heart={heart} />
      </div>

      {/* Today's Goal (floating right) */}
      <div className="flex justify-end mt-10">
        <TodayGoals />
      </div>

    </div>
  );
}
