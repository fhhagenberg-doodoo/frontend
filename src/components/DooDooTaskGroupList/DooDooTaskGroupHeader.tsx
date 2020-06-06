import React from 'react';

interface DooDooTaskGroupHeaderProps {
  dueDate: Date;
}

export const DooDooTaskGroupHeader: React.FC<DooDooTaskGroupHeaderProps> = ({
  dueDate,
}) => {
  return (
    <div className="px-2 py-2 bg-white rounded-lg w-full">
      <span
        className="mr-2"
        role="img"
        aria-label="doodoo-task-group-due-date-icon"
      >
        📅
      </span>
      <span className="font-bold text-brown">
        {dueDate.toLocaleDateString()}
      </span>
    </div>
  );
};
