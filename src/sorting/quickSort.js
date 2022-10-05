const items = [5, 3, 7, 6, 2, 9];
// eslint-disable-next-line require-jsdoc, no-shadow
function swap(items, leftIndex, rightIndex) {
  const temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
// eslint-disable-next-line require-jsdoc, no-shadow
function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)]; // middle element
  let i = left; // left pointer
  let j = right; // right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      // eslint-disable-next-line no-plusplus
      i++;
    }
    while (items[j] > pivot) {
      // eslint-disable-next-line no-plusplus
      j--;
    }
    if (i <= j) {
      swap(items, i, j); // sawpping two elements
      // eslint-disable-next-line no-plusplus
      i++;
      // eslint-disable-next-line no-plusplus
      j--;
    }
  }
  return i;
}

// eslint-disable-next-line require-jsdoc, no-shadow
function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); // index returned from partition
    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      // more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); // prints [2,3,5,6,7,9]
