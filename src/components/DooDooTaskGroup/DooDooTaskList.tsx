import React from "react";
import "../../assets/styles/flex-gap.css";
import { Task } from "../../model";
import { DooDooTask } from "../DooDooTask/DooDooTask";

interface DooDooTaskListProps {
  tasks: Task[];
}

export const DooDooTaskList: React.FC<DooDooTaskListProps> = ({ tasks }) => {
  return (
    <div className="flex flex-col flex-gap-1">
      {tasks.map((task) => (
        <DooDooTask key={task.id} task={task}></DooDooTask>
      ))}
    </div>
  );
};
