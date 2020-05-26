import React from "react";
import "../../assets/styles/flex-gap.css";
import { TaskGroup } from "../../model";
import { DooDooLoadingIndicator } from "../DooDooLoadingIndicator/DooDooLoadingIndicator";
import { DooDooTaskGroup } from "./DooDooTaskGroup";

interface DooDooTaskGroupListProps {
  taskGroups: TaskGroup[];
  isLoading: boolean;
}

export const DooDooTaskGroupList: React.FC<DooDooTaskGroupListProps> = ({
  taskGroups,
  isLoading,
}) => {
  return (
    <div className="flex flex-col flex-gap-10 flex-1 w-full max-h-full overflow-y-scroll">
      {isLoading ? (
        <DooDooLoadingIndicator />
      ) : (
        taskGroups.map((taskGroup) => (
          <DooDooTaskGroup
            key={taskGroup.dueDate.toLocaleDateString()}
            taskGroup={taskGroup}
          ></DooDooTaskGroup>
        ))
      )}
    </div>
  );
};
