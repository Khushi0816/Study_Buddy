import React, { useState } from "react";

export default function UploadPage() {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="min-h-screen bg-background text-white px-10 py-10">

      {/* ---- Top Section ---- */}
      <div className="flex items-center justify-between mb-12">
        <img
          src="/src/assets/logo/v-logo-main.png"
          className="w-40"
        />

        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-white">K</span>
        </div>
      </div>

      {/* ---- Upload Card ---- */}
      <div className="max-w-4xl mx-auto bg-card rounded-2xl p-10 shadow-lg border border-white/10">

        <h1 className="text-3xl font-semibold mb-2">Upload Notes</h1>
        <p className="text-gray-300 mb-8">Generate summaries & flashcards</p>

        {/* Upload Button */}
        <label className="block bg-gradient-to-r from-purple-500 to-purple-400 text-center
                          text-lg font-medium py-4 rounded-xl cursor-pointer transition">
          Upload PDF
          <input type="file" accept="application/pdf" className="hidden" onChange={handleFileUpload} />
        </label>

        {/* File name */}
        {fileName && (
          <p className="text-sm text-center text-purple-300 mt-4">
            Uploaded: {fileName}
          </p>
        )}

        {/* Drag & Drop */}
        <p className="text-center text-gray-400 mt-4">or drag & drop here</p>

      </div>
    </div>
  );
}
