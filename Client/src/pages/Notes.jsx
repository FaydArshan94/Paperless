import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Meeting Notes", content: "Project kickoff meeting..." },
    { id: 2, title: "Design Ideas", content: "Dark neon theme concepts..." },
  ]);
  const [selectedNote, setSelectedNote] = useState(notes[0]);

  return (
    <DashboardLayout>
      <div className="flex h-screen overflow-hidden rounded-xl shadow-sm inset-shadow-xs shadow-cyan-800/50  text-white">
        {/* Left Sidebar - Notes List */}
        <div className="w-1/4 min-w-[250px]  border-r border-cyan-500 p-4 overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-[#9810FA]">All Notes</h2>
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`p-3 rounded-xl cursor-pointer transition ${
                  selectedNote.id === note.id
                    ? "bg-[#9810FA] text-white"
                    : "bg-[#0f172a] hover:bg-cyan-900"
                }`}
              >
                {note.title}
              </div>
            ))}
          </div>
        </div>

        {/* Main Notes Section */}
        <div className="flex-1 flex flex-col">
          {/* Top Action Bar */}
          <div className="flex items-center justify-between  p-4 border-b border-cyan-500">
            <h2 className="text-xl font-bold text-[#9810FA]">Notes Panel</h2>
            <div className="space-x-3">
              <button className="px-4 py-2 bg-[#9810FA] rounded-xl hover:bg-[#7a0f8a]">
                New
              </button>
              <button className="px-4 py-2 bg-[#9810FA] rounded-xl hover:bg-[#7a0f8a]">
                Save
              </button>
              <button className="px-4 py-2 bg-[#9810FA] rounded-xl hover:bg-[#7a0f8a]">
                Delete
              </button>
            </div>
          </div>

          {/* Editor Toolbar */}
          <div className="flex flex-wrap gap-2 p-3  border-b border-cyan-500">
            {["Bold", "Italic", "Underline", "Add Image", "Draw"].map((btn) => (
              <button
                key={btn}
                className="px-3 py-1 bg-cyan-800 text-sm rounded-lg hover:bg-cyan-700"
              >
                {btn}
              </button>
            ))}
          </div>

          {/* Editor Area */}
          <div className="flex-1 p-4">
            <textarea
              value={selectedNote?.content || ""}
              onChange={(e) =>
                setSelectedNote({ ...selectedNote, content: e.target.value })
              }
              className="w-full h-full p-4 rounded-2xl  text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
