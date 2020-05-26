import dayjs from "dayjs";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Rating from "react-rating";
import "../../assets/styles/flex-gap.css";

interface DooDooAddDooModalProps {
  titleInput: string;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const DooDooAddDooModal: React.FC<DooDooAddDooModalProps> = ({
  titleInput,
  isModalOpen,
  closeModal,
}) => {
  const minDate = dayjs();

  const [title, setTitle] = useState<string>(titleInput);
  const [subTitle, setSubTitle] = useState<string>("");
  const [dueDate, setDueDate] = useState<Date>(minDate.toDate());
  const [priority, setPriority] = useState<number>(3);

  const emptySymbol = (
    <span role="img" className="opacity-50 text-3xl" aria-label="Toilet symbol">
      🚽
    </span>
  );
  const fullSymbols = Array.from(Array(priority).keys()).map(() => (
    <span role="img" className="text-3xl" aria-label="Toilet symbol">
      🚽
    </span>
  ));

  return (
    <Modal dialogClassName="text-brown" show={isModalOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Doo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="flex-gap-5">
          <Form.Group controlId="formTitle">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formSubTitle">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Subtitle"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </Form.Group>
          <hr />
          <Form.Group controlId="formDueDate">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              value={dayjs(dueDate).format("YYYY-MM-DD")}
              min={minDate.format("YYYY-MM-DD")}
              onChange={(e) => setDueDate(dayjs(e.target.value).toDate())}
            ></Form.Control>
          </Form.Group>
          <hr />
          <Form.Group controlId="formPriority">
            <Form.Label>Priority</Form.Label>
            <div className="flex justify-center">
              <Rating
                className="border-none w-1/2"
                initialRating={priority}
                emptySymbol={emptySymbol}
                fullSymbol={fullSymbols}
                onChange={(priority) => setPriority(priority)}
              ></Rating>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
