import React from "react";

interface DooDooTaskDescriptionProps {
  title: string;
  subTitle: string;
}

export const DooDooTaskDescription: React.FC<DooDooTaskDescriptionProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div className="flex-1 flex flex-col justify-start">
      <div className="font-bold">{title}</div>
      <div>{subTitle}</div>
    </div>
  );
};
