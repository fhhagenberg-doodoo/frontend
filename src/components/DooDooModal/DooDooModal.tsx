import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Rating from "react-rating";
import "../../assets/styles/flex-gap.css";
import { Task } from "../../model";

interface DooDooAddDooModalProps {
  titleInput: string;
  isModalOpen: boolean;
  onSubmit: (task: Task) => void;
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

export const DooDooModal: React.FC<DooDooAddDooModalProps> = ({
  titleInput,
  isModalOpen,
  onSubmit,
  closeModal,
}) => {
  const [name, setName] = useState<string>(titleInput);
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<Date>(minDate.toDate());
  const [priority, setPriority] = useState<number>(3);

  useEffect(() => setName(titleInput), [titleInput]);

  const [isValidated, setValidated] = useState(false);

  const isFormValid = (event: React.FormEvent<HTMLFormElement>): boolean => {
    const form = event.target as HTMLFormElement;
    const isFormValid = form.checkValidity();

    setValidated(true);

    return isFormValid;
  };

  const buildTask = (): Task =>
    ({
      name,
      description,
      dueDate,
      priority,
    } as Task);

  const submitModal = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFormValid(event)) {
      const task = buildTask();

      onSubmit(task);
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required={false}
            />
          </Form.Group>
          <hr />
          <Form.Group>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dayjs(dueDate).format("YYYY-MM-DD")}
              onChange={(e) => setDueDate(new Date(e.target.value))}
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
                initialRating={priority}
                emptySymbol={emptySymbol}
                fullSymbol={fullSymbol}
                onChange={(priority) => setPriority(priority)}
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
              Add Doo
            </button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
