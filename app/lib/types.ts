import { ReactNode } from "react";

export interface TodoStore {
    tasks: Task[];
    task: Omit<Task, "id">;
    setTask: (key: keyof Omit<Task, "id">, value: string) => void;
    currentTaskId: string | null;
    setCurrentTaskId: (taskId?: string) => void;
    addTask: () => void;
    updateTask: () => void;
    deleteTask: (index: number) => void;
    searchText: string;
    statusFilter: string;
    setSearchText: (text: string) => void;
    setStatusFilter: (status: string) => void;
}

export interface ModalStore {
    isModalOpen: boolean;
    toggleModal: () => void;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: "Pending" | "In Progress" | "Completed";
    dueDate: string;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}