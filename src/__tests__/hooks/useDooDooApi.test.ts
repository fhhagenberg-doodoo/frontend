import originalAxios from 'axios';
import { mocked } from 'ts-jest/utils';
import { Task } from '../../model';
import { TaskDto } from './../../dtos/TaskDto';
import { useDooDooApi } from './../../hooks/useDooDooApi';
import { buildTask, buildTaskDto } from './../../utils/taskUtils';

const dummyResultTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: new Date(Date.now()),
    priority: 3,
    doneSince: new Date(Date.now()),
};

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

jest.mock('axios');
jest.mock('./../../utils/taskUtils');

const axios = mocked(originalAxios, true);
const buildMockTaskDto = mocked(buildTaskDto, true);
const buildMockTask = mocked(buildTask, true);

beforeEach(() => {
    axios.put.mockResolvedValue({ data: dummyTaskDto });
    axios.post.mockResolvedValue({ data: dummyTaskDto });
    axios.delete.mockResolvedValue({});

    buildMockTaskDto.mockReturnValue(dummyTaskDto);
    buildMockTask.mockReturnValue(dummyResultTask);
});

test('putTask works correctly', async () => {
    const { putTask } = useDooDooApi();

    const resultTask = await putTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(axios.put).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyResultTask);
});

test('postTask works correctly', async () => {
    const { postTask } = useDooDooApi();

    const resultTask = await postTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(axios.post).toBeCalled();
    expect(buildMockTask).toBeCalled();
    expect(resultTask).toBe(dummyResultTask);
});

test('deleteTask works correctly', async () => {
    const { deleteTask } = useDooDooApi();

    await deleteTask(dummyTask);

    expect(buildMockTaskDto).toBeCalled();
    expect(axios.delete).toBeCalled();
});
