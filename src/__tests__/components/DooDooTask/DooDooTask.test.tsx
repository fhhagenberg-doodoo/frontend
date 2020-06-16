import dayjs from 'dayjs';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { deleteTask, updateTask, getAllTasks } from '../../../api';
import { Task } from '../../../model';
import { renderSuspending, getAllByText, fireEvent, waitFor } from '../../../utils';
import { DooDooTask } from '../../../components/DooDooTask';

const dummyTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: dayjs().toDate(),
    priority: 3,
    doneSince: dayjs().add(-1, 'day').toDate(),
};

const dummyTasks: Array<Task> = [dummyTask];

jest.mock('../../../api');

const mockGetAllTasks = mocked(getAllTasks);
mockGetAllTasks.mockResolvedValue(dummyTasks);

const mockEditTask = mocked(updateTask, true);

const mockDeleteTask = mocked(deleteTask, true);

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
