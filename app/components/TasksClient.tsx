"use client";

import { useState } from "react";
import AddTask from "./AddTask";

export default function TaskClient({initialTasks}) {
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div>
      <AddTask
        onAdd={(title) => 
          setTasks([...tasks, {id: tasks.length + 1, title}])
        }
      />

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-3 rounded border border-gray-300"
          >
            {task.title}
        
          </div>
        ))}

      </div>
    </div>
  );
}