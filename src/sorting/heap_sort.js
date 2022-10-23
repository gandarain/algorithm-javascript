let arrLength;
const heapRoot = (input, i) => {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;
  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }
  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }
  if (max !== i) {
    // eslint-disable-next-line no-use-before-define
    swap(input, i, max);
    heapRoot(input, max);
  }
};
const swap = (input, indexA, indexB) => {
  const temp = input[indexA];
  input[indexA] = input[indexB];
  input[indexB] = temp;
};
const heapSortAlgorithm = (input) => {
  arrLength = input.length;
  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i);
  }
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    // eslint-disable-next-line no-plusplus
    arrLength--;
    heapRoot(input, 0);
  }
};
const arr = [12, 10, 22, 55, -8, 64, 14];
heapSortAlgorithm(arr);
console.log(arr);
