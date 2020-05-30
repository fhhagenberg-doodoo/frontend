import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";
import { TaskDto } from "../dtos";
import { Task } from "../model";

interface CreateTaskResponse extends AxiosResponse<TaskDto> {}

interface CreateTaskRequest extends TaskDto {}

const buildTaskDto = (task: Task) =>
  ({
    id: task.id,
    name: task.name,
    description: task.description,
    doneSince: !!task.doneSince
      ? dayjs(task.doneSince).format("YYYY-MM-DDTHH:mm:ss.SSSZ")
      : null,
    dueDate: dayjs(task.dueDate).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    priority: task.priority,
  } as TaskDto);

const buildTask = (dto: TaskDto) =>
  ({
    id: dto.id,
    name: dto.name,
    description: dto.description,
    doneSince: !!dto.doneSince ? new Date(dto.doneSince) : null,
    dueDate: new Date(dto.dueDate),
    priority: dto.priority,
  } as Task);

export const postTask = async (task: Task): Promise<Task> => {
  const response = await axios.post<CreateTaskRequest, CreateTaskResponse>(
    `${process.env.REACT_APP_API_BASE_URL}/doodoos`,
    buildTaskDto(task)
  );

  return buildTask(response.data);
};
