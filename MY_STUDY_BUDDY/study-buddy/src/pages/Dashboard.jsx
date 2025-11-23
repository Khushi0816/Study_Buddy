import Navbar from "../components/NavBar";
import NotesPanel from "../components/NotesPanel";
import FlashcardBox from "../components/FlashcardBox";
import PomodoroMini from "../components/PomodoroMini";
import UploadNotes from "../components/UploadCard";


export default function Dashboard(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* left: notes */}
        <section className="lg:col-span-4">
          <NotesPanel />
        </section>

        {/* center: flashcards */}
        <section className="lg:col-span-5">
          <FlashcardBox />
        </section>

        {/* right: pomodoro + important notes */}
        <aside className="lg:col-span-3 flex flex-col gap-4">
          <PomodoroMini />
          <UploadNotes />
          {/* <ImportantNotes /> */}
        </aside>
      </main>
    </div>
  );
}
