import { render } from '../../../utils';
import { DooDooTaskGroupHeader } from '../../../components/DooDooTaskGroupList/DooDooTaskGroupHeader';
import React from 'react';

test('DooDooTaskGroupHeader renders correctly', () => {
    const dummyDueDate = new Date(2020, 0, 1, 13, 0, 0);

    const { getByText } = render(<DooDooTaskGroupHeader dueDate={dummyDueDate} />);
    expect(getByText('📅')).toBeVisible();
    expect(getByText('1/1/2020')).toBeVisible();
});
