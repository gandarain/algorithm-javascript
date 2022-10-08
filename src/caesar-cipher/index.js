/**
 * In cryptography, Caesar cipher, or shear cipher, Caesar cipher or Caesar Shift is one of the simplest 
 * and most well-known encryption techniques.
 * This password includes a substitution cipher where each letter 
 * in the plain text is replaced by another letter that has a certain position difference in the alphabet.
 * 
 * @param {string} str - string of words
 * @param {number} num - num of shift the words in alphabet
 * @returns 
 */
function caesarChiper(str, num) {
    num = num % 26;
    var lowerString = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    var newString = "";

    for (let i = 0; i < lowerString.length; i++) {
        var currentLetter = lowerString[i];
        if (currentLetter === " ") {
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = [26 + newIndex];
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else newString += alphabet[newIndex];
    }
    return newString;
}

// Example
// const res = caesarChiper("Hello World", 1);
// console.log(res);
// result: Ifmmp Xpsme