"use client";

import TaskCard from "./TaskCard";

export default function TasksClient({ tasks }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>

      <div className="grid gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
