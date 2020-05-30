import { postTask, putTask } from "./api-hooks";

export const useDooDooApi = () => ({
  postTask: postTask,
  putTask: putTask,
});
