import { prisma } from "@/lib/db";



export default async function EditTaskPage ({params}: any) {
  const { id } = await params;

  const task = await prisma.task.findUnique({
    where: {id: Number(id)},
  });

  if (!task) return <div>Task not found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Edit Task</h2>

      <form action={updateTask} className="space-y-4">
        <input type="hidden" name="id" value={task.id}/>

        <input
          name="title"
          defaultValue={task.title}
          className="border p-2 w-full"
        />

        <textarea
          name="description"
          defaultValue={task.description || ""}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          Update
        </button>
      </form>

    </div>
  )


}