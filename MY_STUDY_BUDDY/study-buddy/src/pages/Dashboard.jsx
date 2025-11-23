import PomodoroCard from "../components/PomodoroMini";
import NotesPanel from "../components/NotesPanel";
import PdfUploader from "../components/ImportantNotes";
import FlashcardsPreview from "../components/FlashcardBox";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05080f] p-6 space-y-6">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PomodoroCard />
        <PdfUploader />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <NotesPanel />
        <FlashcardsPreview />
      </div>

    </div>
  );
}
