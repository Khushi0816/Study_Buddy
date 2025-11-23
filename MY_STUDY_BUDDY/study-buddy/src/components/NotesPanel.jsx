import React from "react";

const sampleNotes = [
  { id: 1, name: "Biology_Chapter_1.pdf", summaries: 2, cards: 15 },
  { id: 2, name: "HistoryUnit2.pdf", summaries: 1, cards: 8 },
  { id: 3, name: "LiteratureTextbook.pdf", summaries: 0, cards: 12 },
  { id: 4, name: "Physics_Notes.pdf", summaries: 4, cards: 20 }
];

export default function NotesPanel(){
  return (
    <div className="card p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-header">Notes</h3>
        <button className="text-sm text-white/80">+ Add</button>
      </div>

      <div className="mb-4">
        <input className="w-full bg-transparent border border-white/6 rounded-lg p-3 placeholder-white/60" placeholder="Search notes" />
      </div>

      <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">
        {sampleNotes.map(n => (
          <div key={n.id} className="flex items-center gap-4 p-3 bg-white/2 rounded-lg border border-white/4 on-hover: border- #9333EA/4 cursor-pointer">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-[#6b21a8] to-[#9333EA] flex items-center justify-center text-white font-bold">PDF</div>
            <div className="flex-1">
              <div className="font-semibold">{n.name}</div>
              <div className="text-sm small-muted">{n.summaries} summaries · {n.cards} flashcards</div>
            </div>
            <div className="text-sm text-white/70">Today</div>
          </div>
        ))}
      </div>
    </div>
  );
}
