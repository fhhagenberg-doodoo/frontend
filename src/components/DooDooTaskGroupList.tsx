import React from "react";
import "../assets/styles/flex-gap.css";
import { Task, TaskGroup } from "../model";
import { DooDooTaskGroup } from "./DooDooTaskGroup";

const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

const tasks: Array<Task> = [
  { id: 1, title: "Text", subTitle: "More Text" },
  { id: 2, title: "Text", subTitle: "More Text" },
];

const taskGroups: Array<TaskGroup> = [
  { dueDate: new Date(), tasks: tasks },
  { dueDate: addDays(new Date(), 1), tasks: tasks },
  { dueDate: addDays(new Date(), 2), tasks: tasks },
  { dueDate: addDays(new Date(), 3), tasks: tasks },
  { dueDate: addDays(new Date(), 4), tasks: tasks },
  { dueDate: addDays(new Date(), 5), tasks: tasks },
];

export const DooDooTaskGroupList: React.FC = () => {
  return (
    <div className="flex flex-col flex-gap-5 flex-1 w-1/2 max-h-3/4 overflow-y-scroll">
      {taskGroups.map((taskGroup) => (
        <DooDooTaskGroup
          key={taskGroup.dueDate.toLocaleDateString()}
          taskGroup={taskGroup}
        ></DooDooTaskGroup>
      ))}
    </div>
  );
};
