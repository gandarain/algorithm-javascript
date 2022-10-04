/**
 * bubbleSort
 * @param {array} arr - value
 * @return {array} array sorting
 */
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const array = [8, 1, 2, 3, 4, 5, 6, 7];

console.log(bubbleSort(array));
