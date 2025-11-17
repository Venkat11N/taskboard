import AddTask from "../components/AddTask";
import TaskClient from "../components/TasksClient";



  




async function getTasks()  {
  await new Promise((res) => setTimeout(res,1000));
  return [
    {id: 1, title: "Learn Next.js"},
    {id: 2, title: "Build TaskBaord"},
    {id: 3, title: "Practice daily"}
  ];
}


export default async function TasksPage() {
  const tasks = await getTasks();
  return (
    <main className="p-6 text-xl space-y-2">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <TaskClient initialTasks={tasks}/>
    </main>
  );
}
