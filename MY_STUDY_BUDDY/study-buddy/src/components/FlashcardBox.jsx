import React, { useState } from "react";

const demo = [
  { q: "What is the powerhouse of the cell?", a: "Mitochondria" },
  { q: "What is HTTP?", a: "HyperText Transfer Protocol" }
];

export default function FlashcardBox(){
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  const next = () => {
    setShow(false);
    setIdx((i) => (i + 1) % demo.length);
  };

  return (
    <div className="card p-6 flex flex-col items-stretch justify-between">
      <h3 className="text-xl font-header mb-4">Flashcards</h3>

      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-lg h-56 bg-white/5 rounded-xl p-6 flex flex-col justify-center items-center text-center">
          <div className="text-lg text-white mb-6">{demo[idx].q}</div>
          {show && <div className="mt-2 text-sm text-white/80">{demo[idx].a}</div>}
        </div>
      </div>

      <div className="mt-6 flex gap-3 items-center">
        <button onClick={() => setShow(!show)} className="btn-accent"> {show ? "Hide Answer" : "Show Answer"} </button>
        <button onClick={next} className="px-4 py-2 border border-white/6 rounded-lg text-white/80">Shuffle</button>
        <button className="px-4 py-2 border border-white/6 rounded-lg text-white/80">Mark as Known</button>
      </div>
    </div>
  );
}
