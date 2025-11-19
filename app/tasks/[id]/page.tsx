import { prisma } from "@/lib/db";
import { deleteTask } from "../actions";

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: { id: Number(id) },
  });

  if (!task) {
    return <div className="p-4">Task not found.</div>;
  }

  return (
    <div className="p-9">
      <form action={deleteTask}>
        <input type="hidden" name="id" value={task.id} />

        <button className="bg-red-600 text-white px-3 py-2 rounded mt-4">
          Delete Task
        </button>
      </form>

      <h1 className="text-2xl font-bold mt-6">Task ID: {task.title}</h1>
      <p className="mt-2">Title: {task.description}</p>
      <p className="mt-4 text-sm text-gray-600">Status: {task.status}</p>

      <a
        href={`/tasks/${task.id}/edit`}
        className="px-3 py-2 bg-yellow-500 text-white rounded inline-block mt-4"
      >
        Edit Task
      </a>
    </div>
  );
}
