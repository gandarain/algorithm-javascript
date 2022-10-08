/**
 * In cryptography, Caesar cipher, or shear cipher, Caesar cipher or
 * Caesar Shift is one of the simplest
 * and most well-known encryption techniques.
 * This password includes a substitution cipher where each letter
 * in the plain text is replaced by another letter
 * that has a certain position difference in the alphabet.
 *
 * @param {string} str - string of words
 * @param {number} num - num of shift the words in alphabet
 * @returns
 */
const caesarChiper = (str, number) => {
  let num = number;
  num %= 26;
  const lowerString = str.toLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for (let i = 0; i < lowerString.length; i++) {
    const currentLetter = lowerString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
    }
    const currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex -= 26;
    if (newIndex < 0) newIndex = [26 + newIndex];
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    } else newString += alphabet[newIndex];
  }
  return newString;
};

export default caesarChiper;
