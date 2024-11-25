import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import TodoApp from '@/app/todos/page';
// import useTodoStore from '@/stores/todoStores';

// Mock Zustand store
// jest.mock('@/stores/todoStores.ts', () => ({
//   __esModule: true,
//   useTodoStore: jest.fn(),
// }));

describe('TodoApp', () => {
//   const addTaskMock = jest.fn();

//   beforeEach(() => {
//     useTodoStore.mockReturnValue({
//       tasks: [],
//       addTask: addTaskMock,
//       updateTask: jest.fn(),
//     });
//   });

test('renders a heading', () => {
    render(<TodoApp />)
 
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
})

//   test('renders Todo App with input fields and button', () => {
//     render(<TodoApp />);
//     expect(screen.getByPlaceholderText('Task title')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Task description')).toBeInTheDocument();
//     expect(screen.getByText('Add Task')).toBeInTheDocument();
//   });

//   test('adds a new task when the button is clicked', () => {
//     render(<TodoApp />);

//     // Simulate user input
//     userEvent.type(screen.getByPlaceholderText('Task title'), 'New Task');
//     userEvent.type(screen.getByPlaceholderText('Task description'), 'Task description');

//     // Click the add task button
//     userEvent.click(screen.getByText('Add Task'));

//     // Verify that addTask was called with correct data
//     expect(addTaskMock).toHaveBeenCalledTimes(1);
//     expect(addTaskMock).toHaveBeenCalledWith({
//       id: '1', // The first task will have id '1'
//       title: 'New Task',
//       description: 'Task description',
//       status: 'Pending',
//       dueDate: expect.any(String), // Checking that dueDate is a string
//     });
//   });

//   test('renders the tasks after adding one', () => {
//     const mockTasks = [
//       { id: '1', title: 'New Task', description: 'Description', status: 'Pending', dueDate: '2024-12-31' }
//     ];

//     useTodoStore.mockReturnValue({
//       tasks: mockTasks,
//       addTask: addTaskMock,
//       updateTask: jest.fn(),
//     });

//     render(<TodoApp />);

//     // Check if the task is rendered
//     expect(screen.getByText('New Task')).toBeInTheDocument();
//   });
});
