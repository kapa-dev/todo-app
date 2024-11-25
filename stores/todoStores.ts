import { create } from "zustand";
import { TodoStore } from "@/app/lib/types";
import { Task } from "@/app/lib/types";

const useTodoStore = create<TodoStore>((set, get) => ({
  tasks: [],
  task: {
    title: "",
    description: "",
    status: "Pending",
    dueDate: "",
  },
  currentTaskId: null,
  setCurrentTaskId: (taskId) => {
    const state = get();

    if (taskId) {
      const taskToEdit = state.tasks.find((t) => t.id === taskId);
      if (taskToEdit) {
        set({
          task: {
            title: taskToEdit.title,
            description: taskToEdit.description,
            status: taskToEdit.status,
            dueDate: taskToEdit.dueDate,
          },
          currentTaskId: taskId,
        });
      }
    } else {
      set({
        task: { title: "", description: "", status: "Pending", dueDate: "" },
        currentTaskId: null,
      });
    }
  },
  setTask: (key, value) =>
    set((state) => ({ task: { ...state.task, [key]: value } })),
  addTask: () =>
    set((state) => {
      const newTask: Task = {
        id: Date.now().toString(),
        ...state.task,
      };
      return {
        tasks: [...state.tasks, newTask],
        isOpen: false,
        task: { title: "", description: "", status: "Pending", dueDate: "" },
      };
    }),
  updateTask: () => {
    const state = get();

    const { currentTaskId, tasks, task } = state;

    if (currentTaskId) {
      const updatedTasks = tasks.map((t) =>
        t.id === currentTaskId ? { ...t, ...task } : t
      );
      set({
        tasks: updatedTasks,
        currentTaskId: null,
        task: { title: "", description: "", status: "Pending", dueDate: "" },
      });
    }
  },
  deleteTask: (index) =>
    set((state) => ({
      tasks: state.tasks.filter((_, i) => i !== index),
    })),
  searchText: "",
  statusFilter: "All",
  setSearchText: (text) => set({ searchText: text }),
  setStatusFilter: (status) => set({ statusFilter: status }),
}));

export default useTodoStore;