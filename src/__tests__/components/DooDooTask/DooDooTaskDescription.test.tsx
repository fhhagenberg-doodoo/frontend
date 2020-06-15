import React from 'react';
import { DooDooTaskDescription } from '../../../components/DooDooTask/DooDooTaskDescription';
import { render } from '../../../utils/test-utils';

test('DooDooTaskDescription renders correctly', () => {
    const name = 'Name of Test Task';
    const description = 'Description of Test Task';

    const { getByText } = render(<DooDooTaskDescription name={name} description={description} />);

    expect(getByText(name)).toBeVisible();
    expect(getByText(description)).toBeVisible();
});
