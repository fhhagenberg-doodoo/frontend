import React from "react";

type DooDooTaskOptions = {
  onEdit: () => void;
};

export const DooDooTaskOptions: React.FC<DooDooTaskOptions> = ({ onEdit }) => {
  return (
    <div>
      <button onClick={() => onEdit()}>🖊️</button>
    </div>
  );
};
