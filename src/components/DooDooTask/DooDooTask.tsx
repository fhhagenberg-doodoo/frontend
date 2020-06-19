import React from 'react';
import { useRecoilState } from 'recoil';
import { deleteTask, setTaskDone, updateTask } from '../../api';
import { useConfirmModal, useModal } from '../../hooks';
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

    const editTask = async (task: Task) => {
        const updatedTask = await updateTask(taskInput);

        const indexOfTask = tasks.findIndex((t) => t.id === task.id);
        const updatedTasks = replaceItemAtIndex(tasks, indexOfTask, updatedTask);

        setTasks(updatedTasks);
    };

    const removeTask = async (task: Task) => {
        await deleteTask(task);

        const indexOfTask = tasks.findIndex((t) => t.id === task.id);
        const updatedTasks = removeItemAtIndex(tasks, indexOfTask);

        setTasks(updatedTasks);
    };

    const finishTask = async (task: Task) => {
        const doneTask = await setTaskDone(task);

        const indexOfTask = tasks.findIndex((t) => t.id === task.id);
        const updatedTasks = replaceItemAtIndex(tasks, indexOfTask, doneTask);

        setTasks(updatedTasks);
    };

    const canTaskBeDone = (task: Task) => !task.doneSince || task.doneSince > new Date(Date.now());

    const onTaskClick = () => {
        if (canTaskBeDone(taskInput)) {
            finishTask(taskInput);
        }
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
        <div
            className={`flex px-4 py-2 justify-end bg-white text-brown text-md lg:text-lg rounded-lg ${
                canTaskBeDone(taskInput) ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => onTaskClick()}
            data-testid="doodoo-task">
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
