export interface Task {
  id?: string;
  name: string;
  description: string;
  priority: number;
  dueDate: Date;
  doneSince?: Date;
}
