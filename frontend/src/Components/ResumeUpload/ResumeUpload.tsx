import React, { useRef, useState } from "react";
import axios from "axios";

export const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!file) return alert("No file selected.");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:3000/api/resume/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(res.data);
    } catch (err: any) {
      console.error("Upload error:", err);
      alert("Upload failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="p-4">
      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        style={{ display: "none" }}
      />

      {/* Custom button to open file manager */}
      <button
        onClick={() => inputRef.current?.click()}
        className="bg-gray-600 text-white p-2"
      >
        Choose File
      </button>

      {/* Upload button */}
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white p-2 ml-2"
      >
        Upload
      </button>

      {file && <p className="mt-2 text-sm">Selected: {file.name}</p>}

      {result && (
        <div className="mt-4">
          <p><strong>ATS Score:</strong> {result.atsResult.score}/100</p>
          <ul>
            {result.atsResult.suggestions.map((s: string, i: number) => (
              <li key={i}>✅ {s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
