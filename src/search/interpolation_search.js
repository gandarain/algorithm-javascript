/**
 * interpolationSearch
 * @param {array} arr
 * @param {number} lo
 * @param {number} hi
 * @param {number} x
 * @return {number} index from searched value
 */
function interpolationSearch(arr, lo, hi, x) {
  let pos;

  if (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
    pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

    if (arr[pos] === x) {
      return pos;
    }

    // If x is larger, x is in right sub array
    if (arr[pos] < x) {
      return interpolationSearch(arr, pos + 1, hi, x);
    }

    // If x is smaller, x is in left sub array
    if (arr[pos] > x) {
      return interpolationSearch(arr, lo, pos - 1, x);
    }
  }

  return -1;
}

export default interpolationSearch;
