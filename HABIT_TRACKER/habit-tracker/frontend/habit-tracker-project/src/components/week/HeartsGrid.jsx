export default function HeartsGrid() {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <div key={i} className="flex justify-center">
          <img
            src="https://i.imgur.com/OwQF7tA.png"
            className="w-6 h-6"
            alt="heart"
          />
        </div>
      ))}
    </>
  );
}
