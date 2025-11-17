'use client'

import { useState } from "react"
import { addTaskToServer } from "../tasks/actions";

export default function AddTask({onAdd}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleAdd() {
    if (!text.trim()) return;

    setLoading(true);

    await addTaskToServer(text);

    onAdd(text);
    setText("");

    setLoading(false);
  }

  return(
    <div className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
        className="border p-2 rounded"
    />
    <button
      onClick={handleAdd}
      className="bg-black text-white px-4 py-2 rounded"
    >
      {loading ? "Adding..." : "Add"}
    </button>
    </div>
  );
}
