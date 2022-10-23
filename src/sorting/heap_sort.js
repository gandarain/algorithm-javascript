let arrLength;
const heapRoot = (input, i) => {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let max = i;
  if (left < arrLength && input[left] > input[max]) {
    max = left;
  }
  if (right < arrLength && input[right] > input[max]) {
    max = right;
  }
  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
};
const swap = (input, index_A, index_B) => {
  let temp = input[index_A];
  input[index_A] = input[index_B];
  input[index_B] = temp;
};
const heapSortAlgorithm = (input) => {
  arrLength = input.length;
  for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1) {
    heapRoot(input, i);
  }
  for (let i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    arrLength--;
    heapRoot(input, 0);
  }
};
let arr = [12, 10, 22, 55, -8, 64, 14];
heapSortAlgorithm(arr);
console.log(arr);
