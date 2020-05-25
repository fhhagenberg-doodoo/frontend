import React from "react";
import Modal from "react-bootstrap/Modal";

interface DooDooAddDooModalProps {
  title: string;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const DooDooAddDooModal: React.FC<DooDooAddDooModalProps> = ({
  title,
  isModalOpen,
  closeModal,
}) => {
  return (
    <Modal show={isModalOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add a Doo</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};
