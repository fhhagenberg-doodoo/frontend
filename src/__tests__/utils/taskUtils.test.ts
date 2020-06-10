import { Task } from '../../model';
import { buildTask, buildTaskDto } from '../../utils/taskUtils';
import { TaskDto } from './../../dtos/TaskDto';

test('buildTask works correctly', () => {
    const taskDto: TaskDto = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: '2020-06-10T13:00:00.000+02:00',
        priority: 3,
        doneSince: '2020-06-05T13:00:00.000+02:00',
    };

    const task = buildTask(taskDto);

    expect(task.id).toBe('Id of task');
    expect(task.name).toBe('Name of task');
    expect(task.description).toBe('Description of task');
    expect(task.dueDate).toEqual(new Date(2020, 5, 10, 13, 0, 0));
    expect(task.priority).toBe(3);
    expect(task.doneSince).toEqual(new Date(2020, 5, 5, 13, 0, 0));
});

test('buildTaskDto works correctly', () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date(2020, 5, 10, 13, 0, 0),
        priority: 3,
        doneSince: new Date(2020, 5, 5, 13, 0, 0),
    };

    const taskDto = buildTaskDto(task);

    expect(taskDto.id).toBe('Id of task');
    expect(taskDto.name).toBe('Name of task');
    expect(taskDto.description).toBe('Description of task');
    expect(taskDto.dueDate).toBe('2020-06-10T13:00:00.000+02:00');
    expect(taskDto.priority).toBe(3);
    expect(taskDto.doneSince).toBe('2020-06-05T13:00:00.000+02:00');
});
