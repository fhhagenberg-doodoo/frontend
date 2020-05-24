import React from "react";

export const DooDooHeader: React.FC = () => {
  return (
    <span className="self-start py-2 px-5 align-baseline bg-white text-3xl rounded-full">
      <span role="img" aria-label="doodoo-logo">
        💩
      </span>
      <span className="text-brown font-extrabold tracking-wider lowercase">
        DooDoo
      </span>
    </span>
  );
};
