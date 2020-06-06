import { groupBy } from './groupBy';

const mockObjects = [
  {
    age: 25,
    name: 'Alex',
  },
  {
    age: 25,
    name: 'Hannes',
  },
  {
    age: 30,
    name: 'Manuel',
  },
];

test('groups correctly', () => {
  const groups = groupBy(mockObjects, (o) => o.age);

  expect(groups.size).toBe(2);
  expect(groups.keys()).toContain(25);

  const group1 = groups.get(25);
  expect(group1).not.toBeUndefined();
  expect(group1?.length).toBe(2);
  expect(group1?.[0].name).toBe('Alex');
  expect(group1?.[0].age).toBe(25);
  expect(group1?.[1].name).toBe('Hannes');
  expect(group1?.[1].age).toBe(25);

  const group2 = groups.get(30);
  expect(group2).not.toBeUndefined();
  expect(group2?.length).toBe(1);
  expect(group2?.[0].name).toBe('Manuel');
  expect(group2?.[0].age).toBe(30);
});
