const findIndex = require('./findIndex');

describe('findIndex', () => {
  test('Should return the index of the target found in the middle of the array', () => {
    const nums = [1, 3, 5, 6, 9];
    const target = 5;
    const expected = 2;
    const result = findIndex(nums, target);
    expect(result).toBe(expected);
  });

  test('Should return the index of the target found at the beginning of the array', () => {
    const nums = [2, 4, 6, 8, 10];
    const target = 2;
    const expected = 0;
    const result = findIndex(nums, target);
    expect(result).toBe(expected);
  });

  test('Should return -1 if the target is not found', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    const expected = -1;
    const result = findIndex(nums, target);
    expect(result).toBe(expected);
  });
});
