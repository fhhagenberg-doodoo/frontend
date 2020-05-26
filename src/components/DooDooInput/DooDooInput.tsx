import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { DooDooAddDooModal } from "../DooDooAddDooModal/DooDooAddDooModal";

export const DooDooInput: React.FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="self-end flex w-full px-2 py-3 bg-white text-brown rounded-lg">
      <input
        className="ml-4 pl-2 flex-1 border-b-2 border-brown"
        type="text"
        onChange={(e) => setTitleInput(e.target.value)}
      />
      <button
        className="px-4 py-1 h-full align-text-bottom outline-none focus:outline-none focus:border-none"
        type="submit"
        onClick={openModal}
      >
        <FaPlus className="outline-none border-none"></FaPlus>
      </button>
      <DooDooAddDooModal
        titleInput={titleInput}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      ></DooDooAddDooModal>
    </div>
  );
};
