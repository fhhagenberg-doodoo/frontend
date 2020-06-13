import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useRecoilState } from 'recoil';
import { tasksState } from '../../recoil/atoms';
import { Task } from '../../model';
import { createTask } from '../../api';
import { useModal } from '../../hooks';

export const DooDooInput: React.FC = () => {
    const [nameInput, setNameInput] = useState('');
    const [tasks, setTasks] = useRecoilState(tasksState);

    const handleSubmit = async (task: Task) => {
        const createdTask = await createTask(task);
        setTasks([...tasks, createdTask]);
    };

    const [AddModal, openAddModal] = useModal({
        nameInput: nameInput,
        submitButtonText: 'Add Task',
        onSubmit: handleSubmit,
    });

    return (
        <div className="self-end flex w-full px-2 pb-2 pt-3 bg-white text-brown rounded-lg">
            <input
                className="ml-4 pl-2 flex-1 border-b-2 border-brown"
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                data-testid="task-name-input-field"
            />
            <button
                className="px-4 py-1 h-full align-text-bottom outline-none focus:outline-none focus:border-none"
                type="submit"
                onClick={openAddModal}
                data-testid="open-add-modal-button">
                <FaPlus className="outline-none border-none"></FaPlus>
            </button>
            <AddModal></AddModal>
        </div>
    );
};
