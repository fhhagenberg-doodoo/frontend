import dayjs from 'dayjs';
import { advanceTo } from 'jest-date-mock';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { deleteTask, getAllTasks, setTaskDone, updateTask } from '../../../api';
import { DooDooTask } from '../../../components/DooDooTask';
import { Task } from '../../../model';
import { fireEvent, getAllByText, renderSuspending, waitFor } from '../../../utils';

advanceTo('2020-06-10T13:00:00.000Z');

const dummyTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: new Date('2020-06-10T13:00:00.000Z'),
    priority: 3,
    doneSince: new Date('2020-06-08T13:00:00.000Z'),
};

const dummyTasks: Array<Task> = [dummyTask];

jest.mock('../../../api');

const mockGetAllTasks = mocked(getAllTasks);

const mockEditTask = mocked(updateTask);

const mockDeleteTask = mocked(deleteTask);

const mockSetTaskDone = mocked(setTaskDone);

beforeEach(() => {
    mockGetAllTasks.mockResolvedValue(dummyTasks);
});

afterEach(() => {
    mockGetAllTasks.mockClear();
    mockEditTask.mockClear();
    mockDeleteTask.mockClear();
    mockSetTaskDone.mockClear();
});

test('DooDooTask renders correctly', async () => {
    const { findByText, findAllByText } = renderSuspending(<DooDooTask task={dummyTask} />);

    const taskName = await findByText(dummyTask.name);
    expect(taskName).toBeVisible();

    const taskDescription = await findByText(dummyTask.description);
    expect(taskDescription).toBeVisible();

    const taskPriority = await findAllByText('🚽');
    expect(taskPriority.length).toBe(dummyTask.priority);
});

test('DooDooTask opens EditModal', async () => {
    const { findByText, findByRole, getByLabelText } = renderSuspending(
        <DooDooTask task={dummyTask} />
    );

    const editButton = await findByText('🖊️');
    fireEvent.click(editButton);

    const editModal = await findByRole('dialog');
    expect(editModal).toBeVisible();

    expect(getByLabelText('Name')).toHaveValue(dummyTask.name);
    expect(getByLabelText('Description')).toHaveValue(dummyTask.description);
    expect(getByLabelText('Due Date')).toHaveValue(dayjs(dummyTask.dueDate).format('YYYY-MM-DD'));

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    expect(toiletSymbols.length).toBe(5);
    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');
});

test('DooDooTask reacts correctly on EditModal submit', async () => {
    const { findByText, findByRole } = renderSuspending(<DooDooTask task={dummyTask} />);

    const editButton = await findByText('🖊️');
    fireEvent.click(editButton);

    const editModal = await findByRole('dialog');
    expect(editModal).toBeVisible();

    const modalSubmitButton = await findByText('Edit Task', { selector: 'button' });
    expect(modalSubmitButton).toBeVisible();
    fireEvent.click(modalSubmitButton);

    await waitFor(() => expect(editModal).not.toBeInTheDocument());

    expect(mockEditTask).toBeCalled();
});

test('DooDooTask reacts correctly on DeleteModal submit', async () => {
    const { findByText, findByRole } = renderSuspending(<DooDooTask task={dummyTask} />);

    const editButton = await findByText('🗑️');
    fireEvent.click(editButton);

    const deleteModal = await findByRole('dialog');
    expect(deleteModal).toBeVisible();

    const modalSubmitButton = await findByText('Delete Task', { selector: 'button' });
    expect(modalSubmitButton).toBeVisible();
    fireEvent.click(modalSubmitButton);

    await waitFor(() => expect(deleteModal).not.toBeInTheDocument());

    expect(mockDeleteTask).toBeCalled();
});

test('DooDooTask renders correctly when task is not done', async () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date('2020-06-08T13:00:00.000Z'),
        priority: 3,
    };

    const { findByTestId } = renderSuspending(<DooDooTask task={task} />);
    const doodooTask = await findByTestId('doodoo-task');

    await waitFor(() => expect(doodooTask).toHaveClass('opacity-100'));
});

test('DooDooTask renders correctly when task is done', async () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date('2020-06-08T13:00:00.000Z'),
        priority: 3,
        doneSince: new Date('2020-06-05T13:00:00.000Z'),
    };

    const { findByTestId } = renderSuspending(<DooDooTask task={task} />);
    const doodooTask = await findByTestId('doodoo-task');

    await waitFor(() => expect(doodooTask).toHaveClass('opacity-50'));
});

test('DooDooTask calls setDone correctly', async () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date('2020-06-08T13:00:00.000Z'),
        priority: 3,
    };

    const { findByTestId } = renderSuspending(<DooDooTask task={task} />);
    const doodooTask = await findByTestId('doodoo-task');

    fireEvent.click(doodooTask);

    await waitFor(() => expect(mockSetTaskDone).toBeCalledTimes(1));
    expect(mockSetTaskDone).toBeCalledWith(task);
});

test('DooDooTask does nothing on task already done', async () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date('2020-06-08T13:00:00.000Z'),
        priority: 3,
        doneSince: new Date('2020-06-05T13:00:00.000Z'),
    };

    const { findByTestId } = renderSuspending(<DooDooTask task={task} />);

    const doodooTask = await findByTestId('doodoo-task');

    fireEvent.click(doodooTask);

    expect(mockSetTaskDone).toBeCalledTimes(0);
});
