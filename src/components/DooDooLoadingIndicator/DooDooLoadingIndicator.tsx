import React from "react";

export const DooDooLoadingIndicator: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-3xl lg:text-5xl font-extrabold h-full">
      <span role="img" aria-label="Poo Emoji">
        Loading ... 💩
      </span>
    </div>
  );
};
