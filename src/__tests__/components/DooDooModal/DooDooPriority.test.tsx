import React from 'react';
import { DooDooPriority } from '../../../components/DooDooModal/DooDooPriority';
import { fireEvent, render } from '../../../utils/test-utils';

test('DooDooPriority renders correctly', () => {
    const maxRating = 5;

    const { getAllByText } = render(<DooDooPriority maxRating={maxRating} onChange={jest.fn()} />);

    const toiletSymbols = getAllByText('🚽');
    expect(toiletSymbols.length).toBe(maxRating);
});

test('DooDooPriority hovers correctly', () => {
    const maxRating = 5;

    const { getAllByText } = render(<DooDooPriority maxRating={maxRating} onChange={jest.fn()} />);

    const toiletSymbols = getAllByText('🚽');

    expect(toiletSymbols[0].style.opacity).toBe('0.5');
    expect(toiletSymbols[1].style.opacity).toBe('0.5');
    expect(toiletSymbols[2].style.opacity).toBe('0.5');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    fireEvent.mouseEnter(toiletSymbols[3]);

    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('1');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    fireEvent.mouseLeave(toiletSymbols[3]);

    expect(toiletSymbols[0].style.opacity).toBe('0.5');
    expect(toiletSymbols[1].style.opacity).toBe('0.5');
    expect(toiletSymbols[2].style.opacity).toBe('0.5');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');
});

test('DooDooPriority clicks correctly', () => {
    const maxRating = 5;
    const changeHandler = jest.fn();

    const { getAllByText } = render(
        <DooDooPriority maxRating={maxRating} onChange={changeHandler} />
    );

    const toiletSymbols = getAllByText('🚽');

    expect(toiletSymbols.length).toBe(maxRating);
    expect(toiletSymbols[0].style.opacity).toBe('0.5');
    expect(toiletSymbols[1].style.opacity).toBe('0.5');
    expect(toiletSymbols[2].style.opacity).toBe('0.5');
    expect(toiletSymbols[3].style.opacity).toBe('0.5');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    fireEvent.mouseEnter(toiletSymbols[3]);
    fireEvent.click(toiletSymbols[3]);
    fireEvent.mouseLeave(toiletSymbols[3]);

    expect(toiletSymbols[0].style.opacity).toBe('1');
    expect(toiletSymbols[1].style.opacity).toBe('1');
    expect(toiletSymbols[2].style.opacity).toBe('1');
    expect(toiletSymbols[3].style.opacity).toBe('1');
    expect(toiletSymbols[4].style.opacity).toBe('0.5');

    expect(changeHandler).toBeCalled();
});
