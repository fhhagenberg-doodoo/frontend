import axios from "axios";
import { selector } from "recoil";
import { TaskDto } from "../../dtos/TaskDto";
import { Task } from "../../model";

const GET_TASKS = "GetTasks";

const buildTask = (dto: TaskDto): Task =>
  ({
    id: dto.id,
    name: dto.name,
    description: dto.description,
    doneSince: new Date(dto.doneSince),
    dueDate: new Date(dto.dueDate),
    priority: dto.priority,
  } as Task);

export const getTasksQuery = selector<Task[]>({
  key: GET_TASKS,
  get: async () => {
    const response = await axios.get<TaskDto[]>(
      `${process.env.REACT_APP_API_BASE_URL}/doodoos`
    );

    const tasks = response.data.map((dto) => buildTask(dto));

    return tasks;
  },
});
