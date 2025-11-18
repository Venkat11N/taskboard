import Link from "next/link";



export default function TaskListPage() {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">Tasks</h1>
      <Link href="/tasks/create" className="bg-blue-600 text-white px-4 py-2 rounded">
        + Add Task
      </Link>
    </div>
  );
}