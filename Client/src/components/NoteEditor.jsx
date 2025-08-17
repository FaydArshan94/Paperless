import React, { useState } from "react";

function NoteEditor() {
  const [note, setNote] = useState("");

  const handleSave = () => {
    alert("Note Saved: " + note);
    setNote("");
  };

  return (
    <div className="note-editor">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note..."
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default NoteEditor;
