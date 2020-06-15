jest.mock('axios');
jest.mock('../../utils/taskUtils');

import axios from 'axios';
import { mocked } from 'ts-jest/utils';
import { Task } from '../../model';
import { TaskDto } from '../../dtos';
import { buildTaskDto, buildTask, buildTasks } from '../../utils';
import { getTask, getAllTasks, updateTask, createTask, deleteTask, setTaskDone } from '../../api';

const dummyResultTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: new Date(Date.now()),
    priority: 3,
    doneSince: new Date(Date.now()),
};

const dummyResultTasks: Task[] = [
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

const dummyTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: new Date(Date.now()),
    priority: 3,
    doneSince: new Date(Date.now()),
};

const dummyTaskDto: TaskDto = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: '2020-06-10 13:00:00',
    priority: 3,
    doneSince: '2020-06-05 13:00:00',
};

const dummyTaskDtos: TaskDto[] = [
    {
        id: 'Id #1 of task',
        name: 'Name #1 of task',
        description: 'Description #1 of task',
        dueDate: '2020-06-10 13:00:00',
        priority: 3,
        doneSince: '2020-06-05 13:00:00',
    },
    {
        id: 'Id #2 of task',
        name: 'Name #2 of task',
        description: 'Description #2 of task',
        dueDate: '2020-06-10 13:00:00',
        priority: 3,
        doneSince: '2020-06-05 13:00:00',
    },
];

const mockedAxios = mocked(axios, true);

const buildMockTaskDto = mocked(buildTaskDto, true);
const buildMockTask = mocked(buildTask, true);
const buildMockTasks = mocked(buildTasks, true);

test('getTask works correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: dummyResultTask });
    buildMockTask.mockReturnValueOnce(dummyResultTask);

    const resultTask = await getTask('dummy-id');

    expect(mockedAxios.get).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyResultTask);
});

test('getAllTasks works correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: dummyTaskDtos });
    buildMockTasks.mockReturnValueOnce(dummyResultTasks);

    const resultTasks = await getAllTasks();

    expect(mockedAxios.get).toBeCalled();
    expect(buildMockTasks).toBeCalled();
    expect(resultTasks).toBe(dummyResultTasks);
});

test('updateTask works correctly', async () => {
    buildMockTaskDto.mockReturnValueOnce(dummyTaskDto);
    mockedAxios.put.mockResolvedValueOnce({ data: dummyTaskDto });
    buildMockTask.mockReturnValueOnce(dummyResultTask);

    const resultTask = await updateTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(mockedAxios.put).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyResultTask);
});

test('createTask works correctly', async () => {
    buildMockTaskDto.mockReturnValueOnce(dummyTaskDto);
    mockedAxios.post.mockResolvedValueOnce({ data: dummyTaskDto });
    buildMockTask.mockReturnValueOnce(dummyResultTask);

    const resultTask = await createTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(mockedAxios.post).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyResultTask);
});

test('deleteTask works correctly', async () => {
    buildMockTaskDto.mockReturnValueOnce(dummyTaskDto);
    mockedAxios.delete.mockResolvedValueOnce({});

    await deleteTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(mockedAxios.delete).toBeCalled();
});

test('setTaskDone works correctly', async () => {
    const dummyDoneTask = { ...dummyTask, doneSince: new Date(2020, 5, 7, 13, 0, 0) };

    buildMockTaskDto.mockReturnValueOnce(dummyTaskDto);
    mockedAxios.put.mockResolvedValueOnce({
        data: { ...dummyTaskDto, doneSince: '2020-06-07T13:00:00.000+02:00' },
    });
    buildMockTask.mockReturnValueOnce(dummyDoneTask);

    const resultTask = await setTaskDone(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(mockedAxios.put).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyDoneTask);
});
