import React from 'react';
import { useRecoilState } from 'recoil';
import { useConfirmModal, useDooDooApi, useModal } from '../../hooks';
import { Task } from '../../model';
import { tasksState } from '../../recoil/atoms';
import { removeItemAtIndex, replaceItemAtIndex } from '../../utils/arrayUtils';
import { DooDooTaskDescription } from './DooDooTaskDescription';
import { DooDooTaskOptions } from './DooDooTaskOptions';
import { DooDooTaskPriority } from './DooDooTaskPriority';

interface DooDooTaskProps {
    task: Task;
}

export const DooDooTask: React.FC<DooDooTaskProps> = ({ task: taskInput }) => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    const { putTask, deleteTask } = useDooDooApi();

    const editTask = async (task: Task) => {
        await putTask(taskInput);

        const indexOfTask = tasks.findIndex((t) => t.id === task.id);
        const updatedTasks = replaceItemAtIndex(tasks, indexOfTask, task);

        setTasks(updatedTasks);
    };

    const removeTask = async (task: Task) => {
        await deleteTask(task);

        const indexOfTask = tasks.findIndex((t) => t.id === task.id);
        const updatedTasks = removeItemAtIndex(tasks, indexOfTask);

        setTasks(updatedTasks);
    };

    const [EditModal, openEditModal] = useModal({
        task: taskInput,
        submitButtonText: 'Edit Task',
        onSubmit: editTask,
    });

    const [DeleteModal, openDeleteModal] = useConfirmModal({
        task: taskInput,
        submitButtonText: 'Delete Task',
        onSubmit: removeTask,
    });

    return (
        <div className="flex px-4 py-2 justify-end bg-white text-brown text-md lg:text-lg rounded-lg">
            <DooDooTaskDescription
                name={taskInput.name}
                description={taskInput.description}></DooDooTaskDescription>
            <DooDooTaskPriority priority={taskInput.priority}></DooDooTaskPriority>
            <DooDooTaskOptions
                onEdit={openEditModal}
                onDelete={openDeleteModal}></DooDooTaskOptions>
            <EditModal />
            <DeleteModal />
        </div>
    );
};
