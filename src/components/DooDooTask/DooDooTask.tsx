import React from "react";
import { useRecoilState } from "recoil";
import { useModal } from "../../hooks";
import { putTask } from "../../hooks/api-hooks";
import { Task } from "../../model";
import { tasksState } from "../../recoil/atoms";
import { replaceItemAtIndex } from "../../util/arrayUtils";
import { DooDooTaskDescription } from "./DooDooTaskDescription";
import { DooDooTaskOptions } from "./DooDooTaskOptions";
import { DooDooTaskPriority } from "./DooDooTaskPriority";

interface DooDooTaskProps {
  task: Task;
}

export const DooDooTask: React.FC<DooDooTaskProps> = ({ task: taskInput }) => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  const editTask = async (task: Task) => {
    await putTask(taskInput);

    const indexOfTask = tasks.findIndex((t) => t.id === task.id);
    const updatedTasks = replaceItemAtIndex(tasks, indexOfTask, task);

    setTasks(updatedTasks);
  };

  const [EditModal, openEditModal] = useModal({
    task: taskInput,
    submitButtonText: "Edit Task",
    onSubmit: editTask,
  });

  return (
    <div className="flex px-4 py-2 justify-end bg-white text-brown text-md lg:text-lg rounded-lg">
      <DooDooTaskDescription
        name={taskInput.name}
        description={taskInput.description}
      ></DooDooTaskDescription>
      <DooDooTaskPriority priority={taskInput.priority}></DooDooTaskPriority>
      <DooDooTaskOptions onEdit={openEditModal}></DooDooTaskOptions>
      <EditModal />
    </div>
  );
};
