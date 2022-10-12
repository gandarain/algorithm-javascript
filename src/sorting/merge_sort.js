/**
 * Merges the array
 * @param {*} leftSubArray
 * @param {*} rightSubArray
 * @returns
 */
const mergeArrays = (leftSubArray, rightSubArray) => {
  const array = [];
  while (leftSubArray.length && rightSubArray.length) {
    if (leftSubArray[0] < rightSubArray[0]) {
      array.push(leftSubArray.shift());
    } else {
      array.push(rightSubArray.shift());
    }
  }
  return [...array, ...leftSubArray, ...rightSubArray];
};

/**
 * Sorts the array using Merge Sort technique
 * @param {*} unsortedArray - unsorted array
 * @returns {*} sorted array
 */
const mergeSort = (unsortedArray) => {
  const middleIndex = unsortedArray.length / 2;
  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  const leftSubArray = unsortedArray.splice(0, middleIndex);
  return mergeArrays(mergeSort(leftSubArray), mergeSort(unsortedArray));
};

export default mergeSort;
