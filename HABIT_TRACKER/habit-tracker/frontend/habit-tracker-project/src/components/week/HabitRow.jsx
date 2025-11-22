import HeartsGrid from "./HeartsGrid";

export default function HabitRow({ habit }) {
  return (
    <div className="grid grid-cols-8 items-center">
      <div className="font-medium text-gray-700">{habit}</div>
      <HeartsGrid />
    </div>
  );
}
