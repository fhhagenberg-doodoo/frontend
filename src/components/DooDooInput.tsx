import React from "react";
import { FaPlus } from "react-icons/fa";

export const DooDooInput: React.FC = () => {
  return (
    <div className="flex w-full px-2 py-3 bg-white text-brown rounded-lg">
      <input className="ml-4 pl-2 flex-1 border-b-2 border-brown" type="text" />
      <button
        className="px-4 py-1 h-full align-text-bottom outline-none focus:outline-none focus:border-none"
        type="submit"
      >
        <FaPlus className="outline-none border-none"></FaPlus>
      </button>
    </div>
  );
};
