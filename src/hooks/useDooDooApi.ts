import axios from 'axios';
import { TaskDto } from '../dtos';
import { Task } from '../model';
import { buildTask, buildTaskDto } from '../utils/taskUtils';

const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/doodoos`;

const putTask = async (task: Task): Promise<Task> => {
    const response = await axios.put<TaskDto>(API_BASE_URL, buildTaskDto(task));

    return buildTask(response.data);
};

const postTask = async (task: Task): Promise<Task> => {
    const response = await axios.post<TaskDto>(API_BASE_URL, buildTaskDto(task));
    return buildTask(response.data);
};

const deleteTask = async (task: Task): Promise<void> => {
    await axios.delete<TaskDto>(`${API_BASE_URL}/${task.id}`);
};

export const useDooDooApi = () => ({
    postTask: postTask,
    putTask: putTask,
    deleteTask: deleteTask,
});
