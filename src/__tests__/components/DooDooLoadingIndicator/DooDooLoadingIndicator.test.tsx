import React from 'react';
import { DooDooLoadingIndicator } from '../../../components/DooDooLoadingIndicator/DooDooLoadingIndicator';
import { render } from '../../../utils/test-utils';

test('loading indicator renders correctly', () => {
    const { getByRole } = render(<DooDooLoadingIndicator />);

    const span = getByRole('img');

    expect(span).toBeVisible();
    expect(span).toHaveTextContent('Loading ... 💩');
    expect(span).toHaveAttribute('aria-label', 'Poo Emoji');
    expect(span).toHaveAttribute('role', 'img');
});
