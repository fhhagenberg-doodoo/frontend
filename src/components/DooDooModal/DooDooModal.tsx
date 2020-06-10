import dayjs from 'dayjs';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import '../../assets/styles/flex-gap.css';
import { Task } from '../../model';
import { DooDooPriority } from './DooDooPriority';

interface DooDooModalProps {
    task?: Task;
    isModalOpen: boolean;
    submitButtonText: string;
    onSubmit: ((task: Task) => Promise<void>) | ((task: Task) => void);
    closeModal: () => void;
}

export const DooDooModal: React.FC<DooDooModalProps> = ({
    task: taskInput,
    isModalOpen,
    submitButtonText,
    onSubmit,
    closeModal,
}) => {
    const initialTask: Task = taskInput ?? {
        name: '',
        description: '',
        dueDate: dayjs().toDate(),
        priority: 0,
    };

    const [task, setTask] = useState<Task>({ ...initialTask });

    const [isValidated, setValidated] = useState(false);

    const isFormValid = (event: React.FormEvent<HTMLFormElement>): boolean => {
        const form = event.target as HTMLFormElement;
        const isFormValid = form.checkValidity();

        setValidated(true);

        return isFormValid;
    };

    const submitModal = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (isFormValid(event)) {
            await onSubmit(task);
            closeModal();
        }
    };

    const cancelModal = () => {
        closeModal();
    };

    return (
        <Modal dialogClassName="text-brown" show={isModalOpen} onHide={cancelModal}>
            <Modal.Header closeButton>
                <Modal.Title>{submitButtonText}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="flex-gap-5">
                <Form noValidate validated={isValidated} onSubmit={submitModal}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            name="name"
                            size="lg"
                            type="text"
                            placeholder="Name"
                            value={task.name}
                            onChange={(e) => setTask({ ...task, name: e.target.value })}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Doo requires a name!
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            name="description"
                            size="sm"
                            type="text"
                            placeholder="Description"
                            value={task.description}
                            onChange={(e) =>
                                setTask({
                                    ...task,
                                    description: e.target.value,
                                })
                            }
                            required={false}
                        />
                    </Form.Group>
                    <Form.Group controlId="formDueDate">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="dueDate"
                            value={dayjs(task.dueDate).format('YYYY-MM-DD')}
                            onChange={(e) =>
                                setTask({
                                    ...task,
                                    dueDate: new Date(e.target.value),
                                })
                            }
                            min={dayjs().format('YYYY-MM-DD')}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formPriority">
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="div"
                            className="flex border-none w-1/2 h-auto"
                            style={{ border: 'none' }}>
                            <DooDooPriority
                                initialRating={task.priority}
                                maxRating={5}
                                onChange={(value) =>
                                    setTask({
                                        ...task,
                                        priority: value,
                                    })
                                }
                            />
                        </Form.Control>
                    </Form.Group>

                    <div className="flex">
                        <button
                            className="flex-1 border-1 border-brown text-brown rounded-lg p-2 mr-1"
                            onClick={() => cancelModal()}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 bg-brown text-white rounded-lg p-2 ml-1">
                            {submitButtonText}
                        </button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};
