import { selector } from 'recoil';
import { tasksState } from '../atoms';
import { getAllTasks } from '../../api';

const GET_TASKS_QUERY_KEY = 'getTasksQuery';

export const getTasksQuery = selector({
    key: GET_TASKS_QUERY_KEY,
    get: () => getAllTasks(),
    set: ({ set }, tasks) => {
        set(tasksState, tasks);
    },
});
