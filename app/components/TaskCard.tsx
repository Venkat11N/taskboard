"use client";

import Link from "next/link";

export default function TaskCard({ task }) {
  return (
    <Link
      href={`/tasks/${task.id}`}
      className="border p-4 rounded shadow hover:bg-gray-50 transition"
    >
      <h2 className="font-bold text-xl">{task.title}</h2>
      <p className="text-gray-600">{task.description || "No description"}</p>
      <p className="text-sm text-gray-500 mt-2">Status: {task.status}</p>
    </Link>
  );
}
