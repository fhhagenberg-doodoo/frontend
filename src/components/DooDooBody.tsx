import React from "react";
import "../assets/styles/flex-gap.css";
import { DooDooInput } from "./DooDooInput";
import { DooDooTaskGroupList } from "./DooDooTaskGroup/DooDooTaskGroupList";

export const DooDooBody: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow flex-gap-15 items-center pt-4 min-h-0 w-full lg:w-1/2">
      <DooDooTaskGroupList></DooDooTaskGroupList>
      <DooDooInput></DooDooInput>
    </div>
  );
};
