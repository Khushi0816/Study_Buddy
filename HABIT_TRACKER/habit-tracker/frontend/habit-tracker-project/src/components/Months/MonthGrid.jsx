export default function MonthGrid({ days, habitStatuses }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
      <table className="border-collapse">
        <thead>
          <tr>
            {days.map((d) => (
              <th
                key={d}
                className="text-pink-500 text-sm p-2 font-karla"
              >
                {d}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {habitStatuses.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((status, colIndex) => (
                <td key={colIndex} className="p-2 text-center">
                  {status === "star" ? (
                    <span className="text-yellow-400 text-xl">⭐</span>
                  ) : (
                    <span className="text-gray-300">○</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
