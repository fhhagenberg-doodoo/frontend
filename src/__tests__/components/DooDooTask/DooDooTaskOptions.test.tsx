import React from 'react';
import { DooDooTaskOptions } from '../../../components/DooDooTask/DooDooTaskOptions';
import { fireEvent, render } from '../../../utils/test-utils';

test('DooDooTaskOptions renders correctly', () => {
    const { getByText } = render(<DooDooTaskOptions onEdit={jest.fn()} onDelete={jest.fn()} />);

    const editButton = getByText('🖊️');
    expect(editButton).toBeVisible();

    const deleteButton = getByText('🗑️');
    expect(deleteButton).toBeVisible();
});

test('DooDooTaskOptions calls onEdit', () => {
    const editTaskMockFunction = jest.fn();

    const { getByText } = render(
        <DooDooTaskOptions onEdit={editTaskMockFunction} onDelete={jest.fn()} />
    );

    const editButton = getByText('🖊️');
    expect(editButton).toBeVisible();

    fireEvent.click(editButton);

    expect(editTaskMockFunction).toBeCalled();
});

test('DooDooTaskOptions calls onDelete', () => {
    const deleteTaskMockFunction = jest.fn();

    const { getByText } = render(
        <DooDooTaskOptions onEdit={jest.fn()} onDelete={deleteTaskMockFunction} />
    );

    const deleteButton = getByText('🗑️');
    expect(deleteButton).toBeVisible();

    fireEvent.click(deleteButton);

    expect(deleteTaskMockFunction).toBeCalled();
});
