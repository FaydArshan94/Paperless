import React from "react";

function NoteCard({ title, content }) {
  return (
    <div className="note-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default NoteCard;
