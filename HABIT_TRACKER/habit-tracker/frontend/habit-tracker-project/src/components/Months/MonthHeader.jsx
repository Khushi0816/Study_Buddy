export default function MonthHeader({ month }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="text-xl text-pink-500">&lt;</button>

      <h1 className="text-3xl font-bold text-green-700 font-baloo">
        {month}
      </h1>

      <button className="text-xl text-pink-500">&gt;</button>
    </div>
  );
}
