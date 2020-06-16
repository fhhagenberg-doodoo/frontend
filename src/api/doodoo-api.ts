import axios from 'axios';
import { TaskDto } from '../dtos';
import { Task } from '../model';
import { buildTask, buildTaskDto, buildTasks } from '../utils/taskUtils';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/doodoos`;

export const getAllTasks = async (): Promise<Task[]> => {
    const response = await axios.get<TaskDto[]>(API_BASE_URL);

    return buildTasks(response.data);
};

export const getTask = async (id: string): Promise<Task> => {
    const response = await axios.get<TaskDto>(`${API_BASE_URL}/${id}`);

    return buildTask(response.data);
};

export const updateTask = async (task: Task): Promise<Task> => {
    const response = await axios.put<TaskDto>(API_BASE_URL, buildTaskDto(task));

    return buildTask(response.data);
};

export const createTask = async (task: Task): Promise<Task> => {
    const response = await axios.post<TaskDto>(API_BASE_URL, buildTaskDto(task));
    return buildTask(response.data);
};

export const deleteTask = async (task: Task): Promise<void> => {
    await axios.delete<TaskDto>(`${API_BASE_URL}/${task.id}`);
};

export const setTaskDone = async (task: Task): Promise<Task> => {
    const response = await axios.put<TaskDto>(`${API_BASE_URL}/${task.id}/done`);

    return buildTask(response.data);
};
