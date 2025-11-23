export default function FlashcardsPreview() {
  return (
    <div className="bg-[#0d1117] p-6 rounded-2xl w-full shadow-xl border border-gray-700">
      <h2 className="text-xl font-semibold text-pink-400 mb-4">Flashcards</h2>

      <div className="text-gray-400 text-sm">
        No flashcards yet. Upload a PDF to generate them.
      </div>
    </div>
  );
}
