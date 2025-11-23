import SleepChart from "./SleepChart";

export default function SleepTracker() {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-6 flex gap-8">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-pink-500 font-baloo mb-2">
          Sleep Tracker
        </h2>

        <SleepChart />
      </div>

      <div className="w-64 bg-pink-100 rounded-xl p-4 flex flex-col items-center justify-center">
        <p className="text-pink-600 font-semibold">Best Sleep:</p>
        <p className="text-2xl font-bold text-pink-700">8 hrs</p>
        <p className="text-pink-500 text-sm">on Nov 7</p>

        <div className="mt-3 text-5xl">🦥💤</div>
      </div>
    </div>
  );
}
