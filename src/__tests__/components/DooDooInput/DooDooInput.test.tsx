import React from 'react';
import { mocked } from 'ts-jest/utils';
import { createTask, getAllTasks } from '../../../api';
import { DooDooInput } from '../../../components/DooDooInput';
import { renderSuspending, fireEvent, waitFor } from '../../../utils';
import { Task } from '../../../model';

const dummyTasks: Task[] = [
    {
        id: 'Id #1 of task',
        name: 'Name #1 of task',
        description: 'Description #1 of task',
        dueDate: new Date(Date.now()),
        priority: 3,
        doneSince: new Date(Date.now()),
    },
    {
        id: 'Id #2 of task',
        name: 'Name #2 of task',
        description: 'Description #2 of task',
        dueDate: new Date(Date.now()),
        priority: 3,
        doneSince: new Date(Date.now()),
    },
];

jest.mock('../../../api');
const mockGetAllTasks = mocked(getAllTasks, true);
mockGetAllTasks.mockResolvedValue(dummyTasks);

const mockCreateTask = mocked(createTask, true);

test('DooDooInput renders correctly', async () => {
    const { findByTestId } = renderSuspending(<DooDooInput />);

    const inputField = await findByTestId('task-name-input-field');
    const submitButton = await findByTestId('open-add-modal-button');

    expect(inputField).toBeVisible();
    expect(submitButton).toBeVisible();
});

test('DooDooInput sets name correctly', async () => {
    const { findByTestId } = renderSuspending(<DooDooInput />);

    const inputField = await findByTestId('task-name-input-field');

    fireEvent.change(inputField, { target: { value: 'Name of task' } });

    expect(inputField).toHaveValue('Name of task');
});

test('DooDooInput would submits modal correctly', async () => {
    const { findByText, findByTestId, findByRole, findByPlaceholderText } = renderSuspending(
        <DooDooInput />
    );
    const submitButton = await findByTestId('open-add-modal-button');

    fireEvent.click(submitButton);

    const modalDialog = await findByRole('dialog');
    expect(modalDialog).toBeVisible();

    const modalSubmitButton = await findByText('Add Task', { selector: 'button' });
    expect(modalSubmitButton).toBeVisible();

    const nameInputField = await findByPlaceholderText('Name');

    fireEvent.change(nameInputField, { target: { value: 'Name of task' } });
    fireEvent.click(modalSubmitButton);

    await waitFor(() => expect(modalDialog).not.toBeInTheDocument());

    expect(mockCreateTask).toBeCalled();
});
