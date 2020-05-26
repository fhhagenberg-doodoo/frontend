import React from "react";

interface DooDooLoadingIndicatorProps {
  error?: any;
}

export const DooDooLoadingIndicator: React.FC<DooDooLoadingIndicatorProps> = ({
  error,
}) => {
  return (
    <div className="flex flex-col justify-center items-center text-white text-3xl lg:text-5xl font-extrabold h-full">
      <span>Loading ... 💩</span>
      {error && <span className="text-sm">Operation failed.</span>}
    </div>
  );
};
