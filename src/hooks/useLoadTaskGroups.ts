import { useEffect, useState } from "react";
import { Task, TaskGroup } from "../model";
import { groupBy } from "../util/groupBy";

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

const mockTasks: Array<Task> = [
  {
    id: 1,
    title: "Text",
    subTitle: "More Text",
    priority: 3,
    dueDate: new Date(),
  },
  {
    id: 2,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: new Date(),
  },
  {
    id: 3,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 1),
  },
  {
    id: 4,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 1),
  },
  {
    id: 5,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 1),
  },
  {
    id: 6,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 2),
  },
  {
    id: 7,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 2),
  },
  {
    id: 8,
    title: "Text",
    subTitle: "More Text",
    priority: 5,
    dueDate: addDays(new Date(), 2),
  },
];

const fetchTasks = (): Array<Task> => mockTasks;

const groupTasksByDate = (tasks: Array<Task>): Array<TaskGroup> =>
  Array.from(groupBy(tasks, (t) => t.dueDate.toDateString()).entries()).map(
    ([dueDate, tasks]) => ({ dueDate: new Date(dueDate), tasks } as TaskGroup)
  );

export const useLoadTaskGroups = (): [TaskGroup[], boolean] => {
  const [taskGroups, setTaskGroups] = useState<TaskGroup[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const tasks = fetchTasks();
      const taskGroups = groupTasksByDate(tasks);

      setTaskGroups(taskGroups);
      setLoading(false);
    }, 2000);
  }, []);

  return [taskGroups, isLoading];
};
