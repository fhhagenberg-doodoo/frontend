import axios from "axios";
import { Task } from "../../model";

interface UseCreateTaskProps {}

const postTask = (task: Task): Promise<void> =>
  axios.post<void>(process.env.PUBLIC_URL).then(() => {});

export const useCreateTask = (task: Task) => {};
