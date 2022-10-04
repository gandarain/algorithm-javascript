/**
 * Linear Search
 * Use Binary Search for sorted array
 * @param {number} searched value
 * @param {array} array of number
 * @return {number} index from searched value
 */
const linearSearch = (value, list) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return i;
    }
  }

  return null;
};

export default linearSearch;
