export default function TodayGoals() {
  return (
    <div className="w-80 bg-white shadow-md rounded-xl p-4 h-fit">

      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Today’s Goal
      </h2>

      <div className="bg-pink-100 rounded-xl p-4 mb-4">
        <p className="font-medium">Habit 1</p>
        <button className="text-green-700 font-semibold mt-2">
          Completed
        </button>
      </div>

      <div className="bg-pink-100 rounded-xl p-4">
        <p className="font-medium">Habit 2</p>
        <button className="text-green-700 font-semibold mt-2">
          Completed
        </button>
      </div>

    </div>
  );
}
