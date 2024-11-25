import useModalStore from "@/stores/modalStores";
import useTodoStore from "@/stores/todoStores";
import Modal from "@/app/_components/Modal";

export default function TaskForm() {
    const { isModalOpen, toggleModal } = useModalStore();
    const { task, currentTaskId, setCurrentTaskId, addTask, updateTask, setTask } = useTodoStore();

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setTask(name as keyof typeof task, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!task.title || !task.description || !task.dueDate) {
            alert("Please fill in all required fields.");
            return;
        }
        if (currentTaskId) {
            updateTask()
        } else {
            addTask();
        }
        toggleModal();
    };

    return (
        <div>
            <button
                onClick={() => {
                    setCurrentTaskId()
                    toggleModal()
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            >
                Add Task
            </button>
            <Modal isOpen={isModalOpen} onClose={() => toggleModal()}>
                <h2 className="text-center">{currentTaskId ? "Update" : "Create"} a Task</h2>
                <form
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}
                >
                    <label>
                        Title:
                        <input
                            className="border rounded-lg p-2"
                            type="text"
                            name="title"
                            value={task.title}
                            onChange={handleInputChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            className="border rounded-lg p-2"
                            name="description"
                            value={task.description}
                            onChange={handleInputChange}
                            required
                            style={{ width: "100%", height: "80px" }}
                        />
                    </label>
                    <label>
                        Status:
                        <select
                            className="border rounded-lg p-2"
                            name="status"
                            value={task.status}
                            onChange={handleInputChange}
                            required
                            style={{ width: "100%" }}
                        >
                            <option value="Pending">Pending</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </label>
                    <label>
                        Due Date:
                        <input
                            className="border rounded-lg p-2"
                            type="date"
                            name="dueDate"
                            value={task.dueDate}
                            onChange={handleInputChange}
                            required
                            style={{ width: "100%" }}
                        />
                    </label>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" style={{ marginTop: "10px" }}>
                        {currentTaskId ? "Update" : "Add"} Task
                    </button>
                </form>
            </Modal>
        </div>
    );
}
