import React from "react";
import { Task } from "../../model";
import { DooDooTaskDescription } from "./DooDooTaskDescription";
import { DooDooTaskPriority } from "./DooDooTaskPriority";

interface DooDooTaskProps {
  task: Task;
}

export const DooDooTask: React.FC<DooDooTaskProps> = ({ task }) => {
  return (
    <div className="flex px-4 py-2 justify-end bg-white text-brown text-md lg:text-lg rounded-lg">
      <DooDooTaskDescription
        title={task.title}
        subTitle={task.subTitle}
      ></DooDooTaskDescription>
      <DooDooTaskPriority priority={task.priority}></DooDooTaskPriority>
    </div>
  );
};
