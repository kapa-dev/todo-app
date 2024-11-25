"use client";

import TodoList from "@/app/todos/_components/todo-list";
import TaskForm from "./_components/task-form";

export default function Page() {
    return (
        <main className="flex flex-col items-center justify-center py-14">
            <TaskForm />
            <TodoList />
        </main>
    );
}
