import { otpGenerator, passwordGenerator } from './src/random-generator';
import {
  binarySearch, linearSearch, interpolationSearch, exponentialSearch,
} from './src/search';
import caesarChiper from './src/caesar-cipher';
import mergeSort from './src/sorting/merge_sort';

/// Binary Search
const array = [0, 1, 3, 5, 9, 12, 13, 16];
const searchedValue = 13;
const lengthOtp = 6;
const lengthPassword = 20;

const binarySearchResult = binarySearch(searchedValue, array);
console.log(`Binary Search Result ${binarySearchResult} \n`);

const linearSearchResult = linearSearch(searchedValue, array);
console.log(`Binary Search Result ${linearSearchResult} \n`);

const otpResult = otpGenerator(lengthOtp);
console.log(`OTP Result ${otpResult} \n`);

const password = passwordGenerator(lengthPassword);
console.log(`Password Result ${password} \n`);

const caesarCipherResult = caesarChiper('hello World', 1);
console.log(`Caesar Cipher ${caesarCipherResult} \n`);

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
let n = arr.length;
let x = 18;
const interpolationSearchResult = interpolationSearch(arr, 0, n - 1, x);
console.log(`Interpolation Search ${interpolationSearchResult} \n`);

arr = [2, 3, 4, 10, 40];
n = arr.length;
x = 10;
const exponentialSearchResult = exponentialSearch(arr, n, x);
console.log(`Exponential Search ${exponentialSearchResult} \n`);

const unsortedArray = [39, 28, 44, 4, 10, 83, 11];
console.log(`Unsorted array ${unsortedArray}`);
const sortedArray = mergeSort(unsortedArray);
console.log(`Merge Sorted array ${sortedArray}\n`);
