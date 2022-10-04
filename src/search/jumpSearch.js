/**
 * Jump Search
 * Use Jump Search for sorted array
 * @param {number} searched value
 * @param {array} array of number
 * @return {number} index from searched value
 */
function jumpSearch(arr, target) {
  const len = arr.length;

  // Finding the block size for the jump
  const step = Math.floor(Math.sqrt(len));

  // blockStart is the starting index of the block that our target will be in
  let blockStart = 0;
  let currentStep = step;

  while (arr[Math.min(currentStep, len) - 1] < target) {
    // as long as we haven't found the block, we move to the next block and check again
    blockStart = currentStep;
    currentStep += step;

    // If the next block is pass the length of the array, target doesn't exist, return -1
    if (blockStart >= len) return -1;
  }

  // Linear Search within the block until we find the possible index for the target
  while (arr[blockStart] < target) {
    // eslint-disable-next-line no-plusplus
    blockStart++;

    // If we reached the next block or end of array, the target doesn't exist
    if (blockStart === Math.min(currentStep, len)) return -1;
  }

  // Check if the element is the target, if not, target doesn't exist.
  if (arr[blockStart] === target) return blockStart;
  return -1;
}

const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21,
  34, 55, 89, 144, 233, 377, 610];
const x = 55;
// const n = arr.length;

// Find the index of 'x' using Jump Search
const index = jumpSearch(arr, x);

console.log(index);
