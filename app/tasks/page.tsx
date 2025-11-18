
import { prisma } from "@/lib/db";
import TasksClient from "../components/TasksClient";



  




async function getTasks()  {
  const res = await fetch("http://localhost:3000/tasks/api/tasks", {
    cache: "no-store",
  });
  return res.json();
}


export default async function TasksPage() {
  const tasks = await prisma.task.findMany();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>
      <TasksClient tasks={tasks}/>
    </div>
  );
}
