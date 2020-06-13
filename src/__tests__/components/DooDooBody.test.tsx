import { advanceTo } from 'jest-date-mock';
import { Task } from '../../model';
import { waitFor, render } from '../../utils';
import React from 'react';
import { mocked } from 'ts-jest/utils';
import { DooDooBody } from '../../components/DooDooBody';
import { DooDooTaskGroupList } from '../../components/DooDooTaskGroupList';
import { DooDooInput } from '../../components/DooDooInput';

advanceTo(new Date(2020, 0, 1, 13, 0, 0));

jest.mock('../../components/DooDooTaskGroupList');
const MockTaskGroupList = mocked(DooDooTaskGroupList, true);
MockTaskGroupList.mockImplementation(() => <div data-testid="doodootaskgrouplist" />);

jest.mock('../../components/DooDooInput');
const MockDooDooInput = mocked(DooDooInput, true);
MockDooDooInput.mockImplementation(() => <div data-testid="doodooinput" />);

test('DooDooBody renders correctly', async () => {
    const { getByTestId } = render(<DooDooBody />);

    await waitFor(() => expect(getByTestId('doodootaskgrouplist')).toBeVisible());
    await waitFor(() => expect(getByTestId('doodooinput')).toBeVisible());
});
