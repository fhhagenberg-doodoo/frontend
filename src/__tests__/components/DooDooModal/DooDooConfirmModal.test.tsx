import dayjs from 'dayjs';
import React from 'react';
import { Task } from '../../../model';
import { DooDooConfirmModal } from '../../../components/DooDooModal';
import { render, screen, fireEvent, waitFor } from '../../../utils';

const dummyTask: Task = {
    id: 'Id of task',
    name: 'Name of task',
    description: 'Description of task',
    dueDate: dayjs().toDate(),
    priority: 3,
    doneSince: dayjs().add(-1, 'day').toDate(),
};

const submitButtonText = 'Submit Modal';

test('DooDooConfirmModal renders correctly', () => {
    const { getByRole, getByText } = render(
        <DooDooConfirmModal
            task={dummyTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    expect(getByRole('dialog')).toBeVisible();
    expect(getByText('Are You Sure?')).toBeVisible();
    expect(getByText(/Are you really sure you want to go through with this?/)).toBeVisible();
    expect(getByText('Cancel')).toBeVisible();
    expect(getByText(submitButtonText)).toBeVisible();
});

test('DooDooConfirmModal is not visible', () => {
    render(
        <DooDooConfirmModal
            task={dummyTask}
            isModalOpen={false}
            submitButtonText={submitButtonText}
            closeModal={jest.fn()}
            onSubmit={jest.fn()}
        />
    );

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(screen.queryByRole('Are You Sure?')).not.toBeInTheDocument();
    expect(
        screen.queryByRole(/Are you really sure you want to go through with this?/)
    ).not.toBeInTheDocument();
    expect(screen.queryByRole('Cancel')).not.toBeInTheDocument();
    expect(screen.queryByRole(submitButtonText)).not.toBeInTheDocument();
});

test('DooDooConfirmModal calls closeMOdal on cancel', () => {
    const closeModalHandler = jest.fn();

    const { getByText } = render(
        <DooDooConfirmModal
            task={dummyTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={closeModalHandler}
            onSubmit={jest.fn()}
        />
    );

    fireEvent.click(getByText('Cancel'));

    expect(closeModalHandler).toBeCalled();
});

test('DooDooConfirmModal calls onSubmit on cancel', async () => {
    const closeModalHandler = jest.fn();
    const onSubmitHandler = jest.fn();

    const { getByText } = render(
        <DooDooConfirmModal
            task={dummyTask}
            isModalOpen={true}
            submitButtonText={submitButtonText}
            closeModal={closeModalHandler}
            onSubmit={onSubmitHandler}
        />
    );

    fireEvent.click(getByText(submitButtonText));

    await waitFor(() => expect(onSubmitHandler).toBeCalled());
    await waitFor(() => expect(closeModalHandler).toBeCalled());
});
