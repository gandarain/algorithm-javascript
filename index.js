import { binarySearch, linearSearch } from './src/search';

/// Binary Search
const array = [0, 1, 3, 5, 9, 12, 13, 16];
const searchedValue = 13;

const binarySearchResult = binarySearch(searchedValue, array);
console.log(`Binary Search Result ${binarySearchResult} \n`);

const linearSearchResult = linearSearch(searchedValue, array);
console.log(`Binary Search Result ${linearSearchResult} \n`);
