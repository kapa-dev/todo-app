"use client"

import useTodoStore from "@/stores/todoStores";
import useModalStore from "@/stores/modalStores";
import { Task } from "@/app/lib/types";

export default function TodoList() {
  const {
    tasks,
    setCurrentTaskId,
    deleteTask,
    searchText,
    statusFilter,
    setSearchText,
    setStatusFilter
  } = useTodoStore();
  const { toggleModal } = useModalStore();

  const isTaskPastDue = (dueDate: string) => {
    const today = new Date();
    const taskDueDate = new Date(dueDate);
    return taskDueDate < today;
  }

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === "All" || task.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
        <div style={{ marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="Search by title"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="border rounded-lg p-2 mr-2"
            />
            <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border rounded-lg p-2"
            >
                <option value="All">All Status</option>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
        <ul className="flex flex-col gap-4">
            {filteredTasks.map((t: Task, i: number) => (
                <li key={i} className="w-full flex flex-col gap-y-2 mb-4">
                    <div className={`flex flex-col gap-2 p-2 ${isTaskPastDue(t.dueDate) && 'bg-yellow-100 rounded-lg'} ${t.status === "Completed" && 'bg-green-100'}`}>
                        <h1>Title: {t.title}</h1>
                        <p>Description: {t.description}</p>
                        <p>Status: {t.status}</p>
                        <p>Due Date: {t.dueDate}</p>
                    </div>
                    <div className="flex justify-between">
                        <button
                            onClick={() => {
                                setCurrentTaskId(t.id)
                                toggleModal()  
                            }}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => deleteTask(i)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  );
}
