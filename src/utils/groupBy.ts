export function groupBy<T, TKey>(list: T[], keyGetter: (element: T) => TKey): Map<TKey, T[]> {
    const map = new Map<TKey, T[]>();
    list.forEach((item) => {
        const key = keyGetter(item);
        const collection = map.get(key);
        if (!collection) {
            map.set(key, [item]);
        } else {
            collection.push(item);
        }
    });
    return map;
}
