/**
 * Performs a search on a sorted array to find the index of the target element.
 * @param {array} nums - The array to search within.
 * @param {int} target - The target to search for.
 * @returns {int} - The index of the target element if found, otherwise -1.
 */
const findIndex = (nums, target) => {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
      const middleIndex = Math.floor((startIndex + endIndex) / 2);
      const middleElement = nums[middleIndex];

      if (middleElement === target) {
          return middleIndex;
      } else if (middleElement < target) {
          startIndex = middleIndex + 1;
      } else {
          endIndex = middleIndex - 1;
      }
  }

  return -1;
}

module.exports = findIndex;
