import { waitFor, render } from '../utils';
import React from 'react';
import { DooDooHeader } from '../components/DooDooHeader';
import { DooDooBody } from '../components/DooDooBody';
import { mocked } from 'ts-jest/utils';
import App from '../App';

jest.mock('../components/DooDooBody');
const MockDooDooBody = mocked(DooDooBody, true);
MockDooDooBody.mockImplementation(() => <div data-testid="doodoobody" />);

jest.mock('../components/DooDooHeader');
const MockDooDooHeader = mocked(DooDooHeader, true);
MockDooDooHeader.mockImplementation(() => <div data-testid="doodooheader" />);

test('DooDooBody renders correctly', async () => {
    const { getByTestId } = render(<App />);

    await waitFor(() => expect(getByTestId('doodooheader')).toBeVisible());
    await waitFor(() => expect(getByTestId('doodoobody')).toBeVisible());
});
