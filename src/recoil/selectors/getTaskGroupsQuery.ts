import { selector } from 'recoil';
import { Task, TaskGroup } from '../../model';
import { groupBy } from '../../utils/groupBy';
import { tasksState } from '../atoms';

const GET_TASK_GROUPS = 'GetTaskGroups';

const groupTasksByDate = (tasks: Array<Task>): Array<TaskGroup> => {
    const tasksByDate = groupBy(tasks, (t) => t.dueDate.toDateString());

    return Array.from(tasksByDate.entries()).map(
        ([dueDate, tasks]) => ({ dueDate: new Date(dueDate), tasks } as TaskGroup)
    );
};

export const getTaskGroupsQuery = selector<TaskGroup[]>({
    key: GET_TASK_GROUPS,
    get: async ({ get }) => {
        const tasks = get(tasksState);
        const taskGroups = groupTasksByDate(tasks);

        return taskGroups;
    },
});
