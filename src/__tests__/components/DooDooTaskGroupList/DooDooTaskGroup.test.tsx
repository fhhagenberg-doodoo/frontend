import React from 'react';
import { mocked } from 'ts-jest/utils';
import { waitFor, renderSuspending } from '../../../utils';
import { DooDooTaskGroup } from '../../../components/DooDooTaskGroupList';
import { TaskGroup, Task } from '../../../model';
import { DooDooTaskList } from '../../../components/DooDooTaskGroupList/DooDooTaskList';
import { DooDooTaskGroupHeader } from '../../../components/DooDooTaskGroupList/DooDooTaskGroupHeader';

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

const dummyTaskGroup: TaskGroup = {
    dueDate: new Date(2020, 0, 1, 13, 0, 0),
    tasks: dummyTasks,
};

jest.mock('../../../components/DooDooTaskGroupList/DooDooTaskGroupHeader');
const MockDooDooTaskGroupHeader = mocked(DooDooTaskGroupHeader, true);
MockDooDooTaskGroupHeader.mockImplementation(() => <div data-testid="doodoo-task-group-header" />);

jest.mock('../../../components/DooDooTaskGroupList/DooDooTaskList');
const MockDooDooTaskList = mocked(DooDooTaskList, true);
MockDooDooTaskList.mockImplementation(() => <div data-testid="doodoo-task-list" />);

test('DooDooTaskGroup renders correctly', async () => {
    const { getByTestId } = renderSuspending(<DooDooTaskGroup taskGroup={dummyTaskGroup} />);

    await waitFor(() => expect(getByTestId('doodoo-task-group-header')).toBeVisible());
    await waitFor(() => expect(getByTestId('doodoo-task-list')).toBeVisible());
});
