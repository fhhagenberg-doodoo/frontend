import axios from 'axios';
import { selector } from 'recoil';
import { TaskDto } from '../../dtos';
import { Task } from '../../model';
import { tasksState } from '../atoms';

const GET_TASKS_QUERY_KEY = 'getTasksQuery';

const buildTask = (dto: TaskDto): Task =>
    ({
        id: dto.id,
        name: dto.name,
        description: dto.description,
        doneSince: new Date(dto.doneSince),
        dueDate: new Date(dto.dueDate),
        priority: dto.priority,
    } as Task);

const fetchTasks = async (): Promise<Task[]> => {
    const response = await axios.get<TaskDto[]>(`${process.env.REACT_APP_API_BASE_URL}/doodoos`);

    const tasks = response.data.map((dto) => buildTask(dto));

    return tasks;
};

export const getTasksQuery = selector({
    key: GET_TASKS_QUERY_KEY,
    get: () => fetchTasks(),
    set: ({ set }, tasks) => {
        set(tasksState, tasks);
    },
});
