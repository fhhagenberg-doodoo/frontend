export const replaceItemAtIndex = <T>(arr: T[], index: number, newValue: T): Array<T> => {
    if (index < 0 || index >= arr.length) return [...arr];
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

export const removeItemAtIndex = <T>(arr: T[], index: number): Array<T> => {
    if (index < 0 || index >= arr.length) return [...arr];
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
