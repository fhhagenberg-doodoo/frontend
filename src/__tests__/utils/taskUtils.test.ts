import { Task } from '../../model';
import { buildTask, buildTaskDto, buildTasks } from '../../utils/taskUtils';
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

test('buildTask works correctly with doneSince null', () => {
    const taskDto: TaskDto = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: '2020-06-10T13:00:00.000+02:00',
        priority: 3,
    };

    const task = buildTask(taskDto);

    expect(task.id).toBe('Id of task');
    expect(task.name).toBe('Name of task');
    expect(task.description).toBe('Description of task');
    expect(task.dueDate).toEqual(new Date(2020, 5, 10, 13, 0, 0));
    expect(task.priority).toBe(3);
    expect(task.doneSince).toBeNull();
});

test('buildTasks works correctly', () => {
    const taskDtos: TaskDto[] = [
        {
            id: 'Id #1 of task',
            name: 'Name #1 of task',
            description: 'Description #1 of task',
            dueDate: '2020-06-10T13:00:00.000+02:00',
            priority: 3,
            doneSince: '2020-06-05T13:00:00.000+02:00',
        },
        {
            id: 'Id #2 of task',
            name: 'Name #2 of task',
            description: 'Description #2 of task',
            dueDate: '2020-06-12T13:00:00.000+02:00',
            priority: 3,
            doneSince: '2020-06-07T13:00:00.000+02:00',
        },
    ];

    const tasks = buildTasks(taskDtos);

    expect(tasks[0].id).toBe('Id #1 of task');
    expect(tasks[0].name).toBe('Name #1 of task');
    expect(tasks[0].description).toBe('Description #1 of task');
    expect(tasks[0].dueDate).toEqual(new Date(2020, 5, 10, 13, 0, 0));
    expect(tasks[0].priority).toBe(3);
    expect(tasks[0].doneSince).toEqual(new Date(2020, 5, 5, 13, 0, 0));

    expect(tasks[1].id).toBe('Id #2 of task');
    expect(tasks[1].name).toBe('Name #2 of task');
    expect(tasks[1].description).toBe('Description #2 of task');
    expect(tasks[1].dueDate).toEqual(new Date(2020, 5, 12, 13, 0, 0));
    expect(tasks[1].priority).toBe(3);
    expect(tasks[1].doneSince).toEqual(new Date(2020, 5, 7, 13, 0, 0));
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

test('buildTaskDto works correctly with doneSince null', () => {
    const task: Task = {
        id: 'Id of task',
        name: 'Name of task',
        description: 'Description of task',
        dueDate: new Date(2020, 5, 10, 13, 0, 0),
        priority: 3,
    };

    const taskDto = buildTaskDto(task);

    expect(taskDto.id).toBe('Id of task');
    expect(taskDto.name).toBe('Name of task');
    expect(taskDto.description).toBe('Description of task');
    expect(taskDto.dueDate).toBe('2020-06-10T13:00:00.000+02:00');
    expect(taskDto.priority).toBe(3);
    expect(taskDto.doneSince).toBeNull();
});
