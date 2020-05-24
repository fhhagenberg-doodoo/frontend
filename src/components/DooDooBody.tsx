import React from "react";
import "../assets/styles/flex-gap.css";
import { DooDooInput } from "./DooDooInput";
import { DooDooTaskGroupList } from "./DooDooTaskGroupList";

export const DooDooBody: React.FC = () => {
  return (
    <div className="flex flex-col flex-grow flex-gap-4 items-center p-4 min-h-0">
      <DooDooTaskGroupList></DooDooTaskGroupList>
      <DooDooInput></DooDooInput>
    </div>
  );
};
