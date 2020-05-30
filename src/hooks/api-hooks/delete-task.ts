import axios from "axios";
import { TaskDto } from "../../dtos";
import { Task } from "../../model";
import { API_BASE_URL } from "./base-api";

export const deleteTask = async (task: Task): Promise<void> => {
  await axios.delete<TaskDto>(`${API_BASE_URL}/${task.id}`);
};
