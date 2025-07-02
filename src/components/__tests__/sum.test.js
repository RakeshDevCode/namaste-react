const { sum } = require('../sum');

test('adds 1 + 2 to equal 3', () => {
    const result= sum(5,3);
    const expected= 15;
  expect(result).toBe(expected);
});