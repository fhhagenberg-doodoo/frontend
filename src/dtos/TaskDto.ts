export interface TaskDto {
    id: string;
    name: string;
    description: string;
    dueDate: string;
    doneSince?: string;
    priority: number;
}
