import MonthHeader from '../components/Months/MonthHeader';
import HabitList from '../components/Months/HabitList';
import MonthGrid from '../components/Months/MonthGrid';
import SleepTracker from '../components/Months/SleepTracker';

export default function MonthView() {
  // TEMP — replace with actual data later
  const habits = ["Habit1", "Habit2", "Habit3", "Habit4"];
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const habitStatuses = habits.map(() =>
    days.map((d) => (Math.random() > 0.7 ? "star" : "empty"))
  );

  return (
    <div className="w-full min-h-screen bg-pink-50 p-6">
      <MonthHeader month="November" />

      <div className="mt-6 flex gap-6">
        {/* Habits */}
        <HabitList habits={habits} />

        {/* Monthly Grid */}
        <MonthGrid days={days} habitStatuses={habitStatuses} />
      </div>

      {/* Sleep Tracker Section */}
      <div className="mt-10">
        <SleepTracker />
      </div>
    </div>
  );
}
