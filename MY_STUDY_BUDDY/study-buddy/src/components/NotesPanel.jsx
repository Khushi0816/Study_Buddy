import { useState } from "react";

export default function NotesPanel() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  const saveNote = () => {
    if (!title.trim() || !text.trim()) return;
    setNotes([{ title, text, date: "Today" }, ...notes]);
    setTitle("");
    setText("");
  };

  return (
    <div className="bg-[#0d1117] p-6 rounded-2xl w-full shadow-xl border border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-pink-400">Notes</h2>
      </div>

      <input
        className="w-full bg-[#161b22] text-white p-3 rounded-xl mb-3 outline-none"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="w-full bg-[#161b22] text-white p-3 rounded-xl mb-3 h-28 outline-none resize-none"
        placeholder="Write a quick note or paste text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={saveNote}
        className="bg-pink-500 px-6 py-2 rounded-xl text-white font-medium hover:bg-pink-600 transition"
      >
        Save
      </button>

      <div className="mt-6 space-y-3">
        {notes.map((n, i) => (
          <div
            key={i}
            className="bg-[#161b22] p-4 rounded-xl border border-gray-700"
          >
            <div className="flex justify-between">
              <h3 className="text-white font-semibold">{n.title}</h3>
              <p className="text-gray-400 text-sm">{n.date}</p>
            </div>
            <p className="text-gray-300 text-sm mt-1">{n.text.slice(0, 80)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
