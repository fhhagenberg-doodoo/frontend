import React from "react";
import { Task } from "../model";

interface DooDooTaskProps {
  task: Task;
}

export const DooDooTask: React.FC<DooDooTaskProps> = ({ task }) => {
  return (
    <div className="flex flex-col px-4 py-2 bg-white text-brown rounded-lg">
      <div className="font-bold">{task.title}</div>
      <div>{task.subTitle}</div>
    </div>
  );
};
