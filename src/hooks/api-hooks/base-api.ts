import dayjs from 'dayjs';
import { TaskDto } from '../../dtos';
import { Task } from '../../model';

export const API_BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/doodoos`;

export const buildTaskDto = (task: Task): TaskDto =>
  ({
    id: task.id,
    name: task.name,
    description: task.description,
    doneSince: task.doneSince
      ? dayjs(task.doneSince).format('YYYY-MM-DDTHH:mm:ss.SSSZ')
      : null,
    dueDate: dayjs(task.dueDate).format('YYYY-MM-DDTHH:mm:ss.SSSZ'),
    priority: task.priority,
  } as TaskDto);

export const buildTask = (dto: TaskDto): Task =>
  ({
    id: dto.id,
    name: dto.name,
    description: dto.description,
    doneSince: dto.doneSince ? new Date(dto.doneSince) : null,
    dueDate: new Date(dto.dueDate),
    priority: dto.priority,
  } as Task);
