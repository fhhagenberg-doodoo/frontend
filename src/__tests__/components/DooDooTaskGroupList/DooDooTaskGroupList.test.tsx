import { renderSuspending, waitFor } from '../../../utils';
import { DooDooTaskGroupList, DooDooTaskGroup } from '../../../components/DooDooTaskGroupList';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { Task } from '../../../model';
import { getAllTasks } from '../../../api';

const dummyTasks: Task[] = [
    {
        id: 'Id #1 of task',
        name: 'Name #1 of task',
        description: 'Description #1 of task',
        priority: 3,
        dueDate: new Date(2020, 0, 1, 13, 0, 0),
    },
    {
        id: 'Id #2 of task',
        name: 'Name #2 of task',
        description: 'Description #2 of task',
        priority: 5,
        dueDate: new Date(2020, 0, 1, 15, 0, 0),
    },
    {
        id: 'Id #3 of task',
        name: 'Name #2 of task',
        description: 'Description #2 of task',
        priority: 5,
        dueDate: new Date(2020, 0, 5, 11, 0, 0),
    },
];

jest.mock('../../../api');
const mockGetAllTasks = mocked(getAllTasks, true);
mockGetAllTasks.mockResolvedValue(dummyTasks);

jest.mock('../../../components/DooDooTaskGroupList/DooDooTaskGroup');
const MockDooDooTaskGroup = mocked(DooDooTaskGroup, true);
MockDooDooTaskGroup.mockImplementation(() => <div data-testid="doodoo-task-group" />);

test('DooDooTaskGroupList renders correctly', async () => {
    const { getAllByTestId } = renderSuspending(<DooDooTaskGroupList />);

    await waitFor(() => expect(getAllByTestId('doodoo-task-group').length).toBe(2));
});
