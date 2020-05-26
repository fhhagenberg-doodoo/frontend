import React from "react";
import "../../assets/styles/flex-gap.css";
import { useFetchTaskGroups } from "../../hooks";
import { DooDooLoadingIndicator } from "../DooDooLoadingIndicator/DooDooLoadingIndicator";
import { DooDooTaskGroup } from "./DooDooTaskGroup";

export const DooDooTaskGroupList: React.FC = () => {
  const [taskGroups, isLoading, error] = useFetchTaskGroups();

  return (
    <div className="flex flex-col flex-gap-10 flex-1 w-full max-h-full overflow-y-scroll">
      {isLoading ? (
        <DooDooLoadingIndicator error={error} />
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
