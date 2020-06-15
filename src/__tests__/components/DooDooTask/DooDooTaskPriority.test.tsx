import React from 'react';
import { DooDooTaskPriority } from '../../../components/DooDooTask/DooDooTaskPriority';
import { render } from '../../../utils/test-utils';

test('DooDooTaskPriority renders correctly', () => {
    const priority = 4;
    const { getByText, getAllByText } = render(<DooDooTaskPriority priority={priority} />);

    const priorityLabel = getByText('Priority:');
    expect(priorityLabel).toBeVisible();

    const toilets = getAllByText('🚽');
    expect(toilets.length).toBe(priority);
});
