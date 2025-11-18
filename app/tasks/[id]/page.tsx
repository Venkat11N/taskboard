import { prisma } from "@/lib/db";

export default async function TaskDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 

  const task = await prisma.task.findUnique({
    where: { id: Number(id) },
  });

  if (!task) {
    return <div className="p-4">Task not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Task ID: {task.id}</h1>
      <p className="mt-2">Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}
