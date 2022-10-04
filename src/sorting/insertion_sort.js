/**
 * insertionSort
 * @param {array} arr - value
 * @return {array} array sorting
 */
function insertionSort(arr) {
  let currentVal;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // eslint-disable-next-line no-var, vars-on-top
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    // eslint-disable-next-line block-scoped-var
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
