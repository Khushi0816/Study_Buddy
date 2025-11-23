export default function PdfUploader() {
  return (
    <div className="bg-[#0d1117] p-6 rounded-2xl w-full shadow-xl border border-gray-700 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-pink-400 mb-2">PDF</h2>
      <p className="text-gray-300 mb-6">Upload your notes</p>

      <label className="bg-purple-600 px-6 py-3 rounded-xl text-white font-medium hover:bg-purple-700 cursor-pointer">
        Upload from computer
        <input type="file" accept="application/pdf" className="hidden" />
      </label>

      <p className="text-gray-500 mt-3 text-sm">Or drag & drop files here</p>
    </div>
  );
}
