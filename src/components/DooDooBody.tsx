import React from "react";
import "../assets/styles/flex-gap.css";
import { DooDooInput } from "./DooDooInput";
import { DooDooTaskGroupList } from "./DooDooTaskGroupList";

export const DooDooBody: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow flex-gap-4 items-center pt-4 min-h-0 w-full lg:w-3/4">
      <DooDooTaskGroupList></DooDooTaskGroupList>
      <DooDooInput></DooDooInput>
    </div>
  );
};
