import { Task } from '.';

export interface TaskGroup {
  dueDate: Date;
  tasks: Task[];
}
