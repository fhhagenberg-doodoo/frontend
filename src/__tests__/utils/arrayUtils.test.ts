import { removeItemAtIndex, replaceItemAtIndex } from '../../utils/arrayUtils';

test('removes item correctly from front', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const newArray = removeItemAtIndex(array, 0);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(2);
    expect(newArray[0]).toBe(2);
    expect(newArray[1]).toBe(3);
});

test('removes item correctly from middle', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const newArray = removeItemAtIndex(array, 1);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(2);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(3);
});

test('removes item correctly from back', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const newArray = removeItemAtIndex(array, 2);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(2);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
});

test('does not remove anything on index greater than length', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const newArray = removeItemAtIndex(array, 4);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
});

test('does not remove anything on index smaller than zero', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const newArray = removeItemAtIndex(array, -1);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
});

test('does not remove anything on empty array', () => {
    const array: any[] = [];
    expect(array.length).toBe(0);

    const newArray = removeItemAtIndex(array, 0);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(0);
});

test('replaces item correctly at front', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, 0, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(itemThatReplaces);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
});

test('replaces item correctly in middle', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, 1, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(itemThatReplaces);
    expect(newArray[2]).toBe(3);
});

test('replaces item correctly at end', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, 2, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(itemThatReplaces);
});

test('does not replace anything on index greater than length', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, 3, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
});

test('does not replace anything on index smaller than  zero', () => {
    const array = [1, 2, 3];
    expect(array.length).toBe(3);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
    expect(array[2]).toBe(3);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, -1, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(3);
    expect(newArray[0]).toBe(1);
    expect(newArray[1]).toBe(2);
    expect(newArray[2]).toBe(3);
});

test('does not replace anything on empty array', () => {
    const array: any[] = [];
    expect(array.length).toBe(0);

    const itemThatReplaces = 99;

    const newArray = replaceItemAtIndex(array, 0, itemThatReplaces);
    expect(newArray).not.toBe(array);
    expect(newArray.length).toBe(0);
});
