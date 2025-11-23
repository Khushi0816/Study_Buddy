export default function HabitList({ habits }) {
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit, i) => (
        <div
          key={i}
          className="w-28 bg-green-300 text-green-900 font-semibold rounded-md px-4 py-2 font-karla text-center"
        >
          {habit}
        </div>
      ))}
    </div>
  );
}
