import React, { useState } from 'react';
import { DooDooConfirmModal, DooDooModal } from '../components/DooDooModal';
import { Task } from '../model';

type UseModalProps = {
    task?: Task;
    nameInput?: string;
    submitButtonText: string;
    onSubmit: ((task: Task) => Promise<void>) | ((task: Task) => void);
};

export const useModal = ({
    task,
    submitButtonText,
    onSubmit,
}: UseModalProps): [React.FC, () => void] => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const Modal: React.FC = () => (
        <DooDooModal
            task={task}
            submitButtonText={submitButtonText}
            isModalOpen={isModalOpen}
            onSubmit={onSubmit}
            closeModal={closeModal}></DooDooModal>
    );

    return [Modal, openModal];
};

type UseConfirmModalProps = {
    task: Task;
    nameInput?: string;
    submitButtonText: string;
    onSubmit: ((task: Task) => Promise<void>) | ((task: Task) => void);
};

export const useConfirmModal = ({
    task,
    submitButtonText,
    onSubmit,
}: UseConfirmModalProps): [React.FC, () => void] => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const Modal: React.FC = () => (
        <DooDooConfirmModal
            task={task}
            submitButtonText={submitButtonText}
            isModalOpen={isModalOpen}
            onSubmit={onSubmit}
            closeModal={closeModal}></DooDooConfirmModal>
    );

    return [Modal, openModal];
};
