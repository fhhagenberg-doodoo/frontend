import React from "react";
import { useRecoilValue } from "recoil";
import "../../assets/styles/flex-gap.css";
import { getTaskGroupsQuery } from "../../recoil/selectors";
import { DooDooTaskGroup } from "./DooDooTaskGroup";

export const DooDooTaskGroupList: React.FC = () => {
  const taskGroups = useRecoilValue(getTaskGroupsQuery);

  return (
    <div className="flex flex-col flex-gap-10 flex-1 w-full max-h-full overflow-y-scroll">
      {taskGroups.map((taskGroup) => (
        <DooDooTaskGroup
          key={taskGroup.dueDate.toLocaleDateString()}
          taskGroup={taskGroup}
        ></DooDooTaskGroup>
      ))}
    </div>
  );
};
