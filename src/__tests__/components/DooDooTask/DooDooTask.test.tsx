import originalAxios from 'axios';
import dayjs from 'dayjs';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { DooDooTask } from '../../../components/DooDooTask';
import { Task } from '../../../model';
import { fireEvent, getAllByText, renderSuspending } from '../../../utils/test-utils';

const mockTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: dayjs().toDate(),
    priority: 3,
    doneSince: dayjs().add(-1, 'day').toDate(),
};

const mockState: Array<Task> = [mockTask];

jest.mock('axios');

const axios = mocked(originalAxios, true);

axios.get.mockResolvedValue({ data: mockState });
axios.get.mockClear();

test('DooDooTask renders correctly', async () => {
    const { findByText, findAllByText } = renderSuspending(<DooDooTask task={mockTask} />);

    const taskName = await findByText(mockTask.name);
    expect(taskName).toBeVisible();

    const taskDescription = await findByText(mockTask.description);
    expect(taskDescription).toBeVisible();

    const taskPriority = await findAllByText('🚽');
    expect(taskPriority.length).toBe(mockTask.priority);
});

test('DooDooTask opens EditModal', async () => {
    const { findByText, findByRole, getByLabelText } = renderSuspending(
        <DooDooTask task={mockTask} />
    );

    const editButton = await findByText('🖊️');
    fireEvent.click(editButton);

    const editModal = await findByRole('dialog');
    expect(editModal).toBeVisible();

    expect(getByLabelText('Name')).toHaveValue(mockTask.name);
    expect(getByLabelText('Description')).toHaveValue(mockTask.description);
    expect(getByLabelText('Due Date')).toHaveValue(dayjs(mockTask.dueDate).format('YYYY-MM-DD'));

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    expect(toiletSymbols.length).toBe(5);
    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');
});

test('DooDooTask opens DeleteModal', async () => {
    const { findByText, findByRole, getByLabelText } = renderSuspending(
        <DooDooTask task={mockTask} />
    );

    const editButton = await findByText('🖊️');
    fireEvent.click(editButton);

    const deleteModal = await findByRole('dialog');
    expect(deleteModal).toBeVisible();

    expect(getByLabelText('Name')).toHaveValue(mockTask.name);
    expect(getByLabelText('Description')).toHaveValue(mockTask.description);
    expect(getByLabelText('Due Date')).toHaveValue(dayjs(mockTask.dueDate).format('YYYY-MM-DD'));

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    expect(toiletSymbols.length).toBe(5);
    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');
});
