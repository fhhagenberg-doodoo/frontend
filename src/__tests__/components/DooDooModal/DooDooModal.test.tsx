import { advanceTo } from 'jest-date-mock';
import React from 'react';
import { DooDooModal } from '../../../components/DooDooModal';
import { Task } from '../../../model';
import { fireEvent, getAllByText, render, screen } from '../../../utils/test-utils';

advanceTo(new Date(2020, 0, 1, 0, 0, 0));

const mockTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: new Date(Date.now()),
    priority: 3,
};

const submitButtonText = 'Submit Modal';

test('DooDooModal renders correctly without task', () => {
    const { getByRole, getByText, getByLabelText } = render(
        <DooDooModal
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    expect(getByRole('dialog')).toBeVisible();
    expect(getByText(submitButtonText, { selector: 'div' })).toBeVisible();
    expect(getByLabelText('Name')).toHaveValue('');
    expect(getByLabelText('Description')).toHaveValue('');
    expect(getByLabelText('Due Date')).toHaveValue('2020-01-01');

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    expect(toiletSymbols.length).toBe(5);

    expect(toiletSymbols[0].style.opacity).toBe('0.5');
    expect(toiletSymbols[1].style.opacity).toBe('0.5');
    expect(toiletSymbols[2].style.opacity).toBe('0.5');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    expect(getByText('Cancel')).toBeVisible();
    expect(getByText(submitButtonText, { selector: 'button' })).toBeVisible();
});

test('DooDooModal renders correctly with existing task', () => {
    const { getByRole, getByText, getByLabelText } = render(
        <DooDooModal
            task={mockTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    expect(getByRole('dialog')).toBeVisible();
    expect(getByText(submitButtonText, { selector: 'div' })).toBeVisible();
    expect(getByLabelText('Name')).toHaveValue(mockTask.name);
    expect(getByLabelText('Description')).toHaveValue(mockTask.description);
    expect(getByLabelText('Due Date')).toHaveValue('2020-01-01');

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    expect(toiletSymbols.length).toBe(5);

    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    expect(getByText('Cancel')).toBeVisible();
    expect(getByText(submitButtonText, { selector: 'button' })).toBeVisible();
});

test('DooDooModal task name is immutable', () => {
    const currentTask: Task = { ...mockTask };

    const { getByLabelText } = render(
        <DooDooModal
            task={currentTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    const nameFormControl = getByLabelText('Name');

    expect(nameFormControl).toHaveValue(currentTask.name);

    fireEvent.change(nameFormControl, { target: { value: 'test' } });
    expect(nameFormControl).toHaveValue('test');
    expect(currentTask.name).toBe(mockTask.name);
});

test('DooDooModal task description is immutable', () => {
    const currentTask: Task = { ...mockTask };

    const { getByLabelText } = render(
        <DooDooModal
            task={currentTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    const descriptionFormControl = getByLabelText('Description');

    expect(descriptionFormControl).toHaveValue(currentTask.description);

    fireEvent.change(descriptionFormControl, { target: { value: 'test' } });
    expect(descriptionFormControl).toHaveValue('test');
    expect(currentTask.description).toBe(mockTask.description);
});

test('DooDooModal task due date is immutable', () => {
    const currentTask: Task = { ...mockTask };

    const { getByLabelText } = render(
        <DooDooModal
            task={currentTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    const dueDateFormControl = getByLabelText('Due Date');

    expect(dueDateFormControl).toHaveValue('2020-01-01');
    fireEvent.change(dueDateFormControl, { target: { value: '2020-01-08' } });
    expect(dueDateFormControl).toHaveValue('2020-01-08');
    expect(currentTask.dueDate).toBe(mockTask.dueDate);
});

test('DooDooModal task priority is immutable', () => {
    const currentTask: Task = { ...mockTask };

    const { getByLabelText } = render(
        <DooDooModal
            task={currentTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    const toiletSymbols = getAllByText(getByLabelText('Priority'), '🚽');
    fireEvent.click(toiletSymbols[2]);

    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    expect(currentTask.priority).toBe(mockTask.priority);
});

test('DooDooConfirmModal is not visible', () => {
    render(
        <DooDooModal
            task={mockTask}
            isModalOpen={false}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByText(submitButtonText, { selector: 'div' })).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Description')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Due Date')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Priority')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Cancel')).not.toBeInTheDocument();
    expect(
        screen.queryByLabelText(submitButtonText, { selector: 'button' })
    ).not.toBeInTheDocument();
});

test('DooDooModal calls closeModal correctly', () => {
    const closeModalHandler = jest.fn();

    const { getByText } = render(
        <DooDooModal
            task={mockTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={closeModalHandler}
            onSubmit={jest.fn()}
        />
    );

    fireEvent.click(getByText('Cancel'));

    expect(closeModalHandler).toBeCalled();
});

test('DooDooModal calls onSubmit correctly', () => {
    const onSubmitHandler = jest.fn();

    const { getByText } = render(
        <DooDooModal
            task={mockTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={onSubmitHandler}
        />
    );

    fireEvent.click(getByText(submitButtonText, { selector: 'button' }));

    expect(onSubmitHandler).toBeCalled();
});

test('DooDooModal does not call onSubmit on empty name', () => {
    const onSubmitHandler = jest.fn();

    const { getByText } = render(
        <DooDooModal
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={onSubmitHandler}
        />
    );

    fireEvent.click(getByText(submitButtonText, { selector: 'button' }));

    expect(onSubmitHandler).not.toBeCalled();
});
