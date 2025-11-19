import { prisma } from "@/lib/db";
import { updateTask } from "../../actions";

export default async function EditTaskPage({ params }: any) {
  const { id } = await params;
  const taskId = Number(id);

  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) return <div>Task not found</div>;

  return (
    <form action={updateTask} className="flex flex-col gap-3 p-6">
      <input type="hidden" name="id" value={task.id} />

      <input
        name="title"
        defaultValue={task.title}
        className="border p-2"
      />

      <textarea
        name="description"
        defaultValue={task.description || ""}
        className="border p-2"
      />

      <select
        name="status"
        defaultValue={task.status}
        className="border p-2"
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2">
        Update Task
      </button>
    </form>
  );
}
