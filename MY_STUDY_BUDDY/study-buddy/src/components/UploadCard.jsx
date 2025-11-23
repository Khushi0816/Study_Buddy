import React, { useState } from "react";

export default function UploadCard() {
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    // Later: send file to backend / n8n / API
    console.log("Uploaded file:", file);
  };

  return (
    <div className="bg-[#140A2C] rounded-2xl p-6 mt-6 shadow-lg border border-white/5">
      <h2 className="text-xl font-semibold text-white mb-1">
        Upload Document
      </h2>
      <p className="text-sm text-white/60 mb-5">
        Generate flashcards & summaries
      </p>

      {/* Upload Button */}
      <label className="block w-full">
        <div className="bg-gradient-to-r from-purple-500 to-purple-400 hover:opacity-90 cursor-pointer py-3 rounded-xl text-center font-semibold text-white text-sm">
          Upload PDF
        </div>
        <input
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileUpload}
        />
      </label>

      {/* Optional Filename Display */}
      {fileName && (
        <p className="text-xs text-purple-300 text-center mt-3">
          Uploaded: {fileName}
        </p>
      )}

      <p className="text-xs text-white/40 text-center mt-3">
        or drag & drop here
      </p>
    </div>
  );
}
