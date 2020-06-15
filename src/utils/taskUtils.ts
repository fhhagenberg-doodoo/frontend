import dayjs from 'dayjs';
import { TaskDto } from '../dtos';
import { Task } from '../model';

export const buildTaskDto = (task: Task): TaskDto =>
    ({
        id: task.id,
        name: task.name,
        description: task.description,
        doneSince: task.doneSince ? dayjs(task.doneSince).toISOString() : null,
        dueDate: dayjs(task.dueDate).toISOString(),
        priority: task.priority,
    } as TaskDto);

export const buildTask = (dto: TaskDto): Task =>
    ({
        id: dto.id,
        name: dto.name,
        description: dto.description,
        doneSince: dto.doneSince ? dayjs(dto.doneSince).toDate() : null,
        dueDate: dayjs(dto.dueDate).toDate(),
        priority: dto.priority,
    } as Task);

export const buildTasks = (dtos: TaskDto[]): Task[] => dtos.map((dto) => buildTask(dto));
