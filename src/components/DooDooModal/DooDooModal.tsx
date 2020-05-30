import dayjs from "dayjs";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Rating from "react-rating";
import "../../assets/styles/flex-gap.css";
import { Task } from "../../model";

interface DooDooModalProps {
  task: Task;
  isModalOpen: boolean;
  submitButtonText: string;
  onSubmit: ((task: Task) => Promise<void>) | ((task: Task) => void);
  closeModal: () => void;
}

const minDate = dayjs();

const emptySymbol = (
  <span role="img" className="opacity-50 text-3xl" aria-label="Toilet symbol">
    🚽
  </span>
);
const fullSymbol = (
  <span role="img" className="text-3xl" aria-label="Toilet symbol">
    🚽
  </span>
);

export const DooDooModal: React.FC<DooDooModalProps> = ({
  task: taskInput,
  isModalOpen,
  submitButtonText,
  onSubmit,
  closeModal,
}) => {
  const [task, setTask] = useState<Task>(taskInput);

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
        <Modal.Title>Add a Doo</Modal.Title>
      </Modal.Header>
      <Modal.Body className="flex-gap-5">
        <Form noValidate validated={isValidated} onSubmit={submitModal}>
          <Form.Group controlId="formName">
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
            <Form.Control
              name="description"
              size="sm"
              type="text"
              placeholder="Subtitle"
              value={task.description}
              onChange={(e) =>
                setTask({ ...task, description: e.target.value })
              }
              required={false}
            />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dayjs(task.dueDate).format("YYYY-MM-DD")}
              onChange={(e) =>
                setTask({ ...task, dueDate: new Date(e.target.value) })
              }
              min={minDate.format("YYYY-MM-DD")}
              required
            />
          </Form.Group>
          <hr />
          <Form.Group controlId="formPriority">
            <Form.Label>Priority</Form.Label>
            <div className="flex">
              <Rating
                className="border-none w-1/2"
                initialRating={task.priority}
                emptySymbol={emptySymbol}
                fullSymbol={fullSymbol}
                onChange={(priority) => setTask({ ...task, priority })}
              />
            </div>
          </Form.Group>

          <div className="flex">
            <button
              className="flex-1 border-1 border-brown text-brown rounded-lg p-2 mr-1"
              onClick={() => cancelModal()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-brown text-white rounded-lg p-2 ml-1"
            >
              {submitButtonText}
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
