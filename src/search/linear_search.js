/**
 * Linear Search
 * Use Binary Search for sorted array
 * @param {number} searched value
 * @param {array} array of number
 * @return {number} index from searched value
 */
const linearSearch = (value, list) => {
  for (var i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }
  
  return null;
}

const array = [9, 12, 3, 16, 0, 1, 13, 5]
const searchedValue = 12

const result = linearSearch(searchedValue, array);
console.log('Your searched value at the index ', result);