import React from "react";

type DooDooTaskOptionsProps = {
  onEdit: () => void;
};

export const DooDooTaskOptions: React.FC<DooDooTaskOptionsProps> = ({
  onEdit,
}) => {
  return (
    <div>
      <button onClick={() => onEdit()}>
        <span role="img" aria-label="Pen EmojI">
          🖊️
        </span>
      </button>
    </div>
  );
};
