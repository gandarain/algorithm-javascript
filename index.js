import { otpGenerator, passwordGenerator } from './src/random-generator';
import { binarySearch, linearSearch, interpolationSearch } from './src/search';
import caesarChiper from './src/caesar-cipher';

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

const arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
const n = arr.length;
const x = 18;
const interpolationSearchResult = interpolationSearch(arr, 0, n - 1, x);
console.log(`Interpolation Search ${interpolationSearchResult}`);
