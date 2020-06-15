import { DooDooTaskList } from '../../../components/DooDooTaskGroupList/DooDooTaskList';
import { Task } from '../../../model';
import { renderSuspending, waitFor } from '../../../utils';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { DooDooTask } from '../../../components/DooDooTask';

jest.mock('../../../components/DooDooTask/DooDooTask');
const MockDooDooTask = mocked(DooDooTask, true);
MockDooDooTask.mockImplementation(() => <div data-testid="doodoo-task" />);

test('DooDooTaskList renders correctly', async () => {
    const dummyTasks: Task[] = [
        {
            id: 'Id #1 of task',
            name: 'Name #1 of task',
            description: 'Description #1 of task',
            priority: 3,
            dueDate: new Date(Date.now()),
        },
        {
            id: 'Id #2 of task',
            name: 'Name #2 of task',
            description: 'Description #2 of task',
            priority: 5,
            dueDate: new Date(Date.now()),
        },
    ];

    const { getAllByTestId } = renderSuspending(<DooDooTaskList tasks={dummyTasks} />);

    await waitFor(() => expect(getAllByTestId('doodoo-task').length).toBe(2));
});
