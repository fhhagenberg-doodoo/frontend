import React from 'react';
import '../../assets/styles/flex-gap.css';
import { TaskGroup } from '../../model';
import { DooDooTaskGroupHeader } from './DooDooTaskGroupHeader';
import { DooDooTaskList } from './DooDooTaskList';

type DooDooTaskGroupProps = {
    taskGroup: TaskGroup;
};

export const DooDooTaskGroup: React.FC<DooDooTaskGroupProps> = ({ taskGroup }) => {
    return (
        <div className="flex flex-col flex-gap-1">
            <DooDooTaskGroupHeader dueDate={taskGroup.dueDate}></DooDooTaskGroupHeader>
            <DooDooTaskList tasks={taskGroup.tasks}></DooDooTaskList>
        </div>
    );
};
