import { atom } from 'recoil';
import { Task } from '../../model';
import { getTasksQuery } from '../selectors/getTasksQuery';

const TASKS_STATE = 'tasksState';

export const tasksState = atom<Task[]>({
    key: TASKS_STATE,
    default: getTasksQuery,
});
