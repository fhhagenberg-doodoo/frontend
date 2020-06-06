import { render } from '@testing-library/react';
import React from 'react';
import { DooDooHeader } from './DooDooHeader';

test('renders header', () => {
  const { getByRole, getByText } = render(<DooDooHeader />);
  const logo = getByRole('img');
  const logoText = getByText('DooDoo');

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveTextContent('💩');

  expect(logoText).toBeInTheDocument();
  expect(logoText).toHaveTextContent('DooDoo');
});
