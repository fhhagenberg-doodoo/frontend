import React from "react";
import Modal from "react-bootstrap/Modal";
import { Task } from "../../model";

interface DooDooConfirmModalProps {
  task: Task;
  isModalOpen: boolean;
  submitButtonText: string;
  onSubmit: ((task: Task) => Promise<void>) | ((task: Task) => void);
  closeModal: () => void;
}

export const DooDooConfirmModal: React.FC<DooDooConfirmModalProps> = ({
  task,
  onSubmit,
  isModalOpen,
  closeModal,
  submitButtonText,
}) => {
  const cancelModal = () => closeModal();

  const submitModal = async () => {
    await onSubmit(task);
    closeModal();
  };

  return (
    <Modal className="text-brown" show={isModalOpen} onHide={cancelModal}>
      <Modal.Header closeButton>
        <Modal.Title>Are You Sure?</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className="text-black">
          Once it's down the drain, you can't get it back.{" "}
          <span role="img" aria-label="Poo Emoji">
            💩
          </span>
          <br></br>
          Are you really sure you want to go through with this?
        </p>
      </Modal.Body>

      <Modal.Footer>
        <button
          className="flex-1 bg-brown text-white rounded-lg p-2 mr-1"
          onClick={() => cancelModal()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 border-1 border-brown text-brown rounded-lg p-2 ml-1"
          onClick={submitModal}
        >
          {submitButtonText}
        </button>
      </Modal.Footer>
    </Modal>
  );
};
