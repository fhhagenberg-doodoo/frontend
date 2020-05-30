import { selector } from "recoil";
import { Task, TaskGroup } from "../../model";
import { groupBy } from "../../util/groupBy";
import { getTasksQuery } from "./getTasksQuery";

const GET_TASK_GROUPS = "GetTaskGroups";

const groupTasksByDate = (tasks: Array<Task>): Array<TaskGroup> => {
  const tasksByDate = groupBy(tasks, (t) => t.dueDate.toDateString());

  return Array.from(tasksByDate.entries()).map(
    ([dueDate, tasks]) => ({ dueDate: new Date(dueDate), tasks } as TaskGroup)
  );
};

export const getTaskGroupsQuery = selector<TaskGroup[]>({
  key: GET_TASK_GROUPS,
  get: async ({ get }) => {
    const tasks = get(getTasksQuery);
    console.log(tasks);
    const taskGroups = groupTasksByDate(tasks);

    return taskGroups;
  },
});
