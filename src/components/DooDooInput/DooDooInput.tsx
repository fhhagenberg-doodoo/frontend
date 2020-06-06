import dayjs from 'dayjs';
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { useDooDooApi, useModal } from '../../hooks';
import { Task } from '../../model';
import { tasksState } from '../../recoil/atoms';

const initialTask: Task = {
  name: '',
  description: '',
  dueDate: dayjs().toDate(),
  priority: 3,
};

export const DooDooInput: React.FC = () => {
  const [task, setTask] = useState<Task>(initialTask);
  const [tasks, setTasks] = useRecoilState(tasksState);

  const { postTask } = useDooDooApi();

  const createTask = async (task: Task) => {
    const createdTask = await postTask(task);

    setTasks([...tasks, createdTask]);
    setTask({ ...initialTask });
  };

  const [AddModal, openAddModal] = useModal({
    task: task,
    submitButtonText: 'Add Task',
    onSubmit: createTask,
  });

  return (
    <div className="self-end flex w-full px-2 pb-2 pt-3 bg-white text-brown rounded-lg">
      <input
        className="ml-4 pl-2 flex-1 border-b-2 border-brown"
        type="text"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <button
        className="px-4 py-1 h-full align-text-bottom outline-none focus:outline-none focus:border-none"
        type="submit"
        onClick={openAddModal}
      >
        <FaPlus className="outline-none border-none"></FaPlus>
      </button>
      <AddModal></AddModal>
    </div>
  );
};
