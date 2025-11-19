"use client";

import { createTask } from "../actions";
import { useRouter } from "next/navigation";

export default function CreateTaskPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    await createTask(formData);
    router.push("/tasks");
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>

      <form action={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          className="border p-2 w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border p-2 w-full"
        />

        <select name="status" defaultValue={task.status} className="border p-2">
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>


        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

