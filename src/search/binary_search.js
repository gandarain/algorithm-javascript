/**
 * Binary Search
 * Use Binary Search for sorted array
 * @param {number} searched value
 * @param {array} array of number
 * @return {number} index from searched value
 */
const binarySearch = (value, list) => {
  let low = 0;
  let high = list.length - 1;
  let position = -1;
  let found = false;
  let mid;

  while (found === false && low <= high) {
    mid = Math.floor((low + high)/2);
    if (list[mid] == value) {
        found = true;
        position = mid;
    } else if (list[mid] > value) {
        high = mid - 1;
    } else {
        low = mid + 1;
    }
  }
  return position;
}

const array = [0, 1, 3, 5, 9, 12, 13, 16]
const searchedValue = 13

const result = binarySearch(searchedValue, array);
console.log('Your searched value at the index ', result);