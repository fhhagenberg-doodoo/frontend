import axios from 'axios';
import { TaskDto } from '../../dtos';
import { Task } from '../../model';
import { API_BASE_URL, buildTask, buildTaskDto } from './base-api';

export const putTask = async (task: Task): Promise<Task> => {
  const response = await axios.put<TaskDto>(API_BASE_URL, buildTaskDto(task));

  return buildTask(response.data);
};
