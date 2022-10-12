import binarySearch from './binary_search';
/**
 * interpolationSearch
 * @param {array} arr
 * @param {number} n
 * @param {number} x
 * @return {number} index from searched value
 */
function exponentialSearch(arr, n, x) {
  if (arr[0] === x) { return 0; }

  let i = 1;

  while (i < n && arr[i] <= x) i *= 2;

  return binarySearch(
    arr,
    i / 2,
    Math.min(i, n - 1),
    x,
  );
}

export default exponentialSearch;
