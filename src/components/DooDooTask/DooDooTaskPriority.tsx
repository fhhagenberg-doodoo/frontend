import React from 'react';
import '../../assets/styles/flex-gap.css';

interface DooDooTaskPriorityProps {
  priority: number;
}

export const DooDooTaskPriority: React.FC<DooDooTaskPriorityProps> = ({
  priority,
}) => {
  const toilets = Array.from(Array(priority).keys()).map((i) => (
    <span
      className="text-xs md:text-base lg:text-lg"
      key={i}
      role="img"
      aria-label="Toilet per point in priority"
    >
      🚽
    </span>
  ));

  return (
    <div className="flex-1 flex items-center">
      <div className="mr-3 text-brown">Priority:</div>
      <div>{toilets}</div>
    </div>
  );
};
