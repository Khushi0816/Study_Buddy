import WeekHeader from "./WeekHeader";
import DaysRow from "./DaysRow";
import HabitRow from "./HabitRow";
import TodayGoals from "./TodayGoals";

export default function WeekPage() {
  const habits = ["Habit 1", "Habit 2", "Habit 3", "Habit 4"];

  return (
    <div className="flex w-full px-10 py-6 gap-10">

      {/* LEFT SECTION */}
      <div className="flex-1">
        <WeekHeader />

        <DaysRow />

        {/* HABIT ROWS */}
        <div className="mt-4 space-y-6">
          {habits.map((h, index) => (
            <HabitRow key={index} habit={h} />
          ))}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[300px]">
        <TodayGoals />
      </div>

    </div>
  );
}
