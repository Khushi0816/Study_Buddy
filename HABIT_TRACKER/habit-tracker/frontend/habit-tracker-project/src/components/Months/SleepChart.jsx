export default function SleepChart() {
  const data = [
    5, 6.5, 7, 6, 6.5, 7.8, 8.3, 7.2, 7, 7.5, 7.3, 7, 7.2, 7.8,
  ];

  const max = 10;
  const width = 400;
  const height = 120;

  const points = data
    .map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - (val / max) * height;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} className="mt-4">
      <polyline
        fill="none"
        stroke="#FF77A9"
        strokeWidth="3"
        points={points}
      />
    </svg>
  );
}
