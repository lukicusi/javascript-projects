function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

// LUCAS- directions are: Use method chaining to reduce the reverse function to a single line.
//I think below is the correct chainging method. 
//((ripped from textbook after reverse.js before isPalindrome.js in composing functions section))
function reverse(str) {
   return str.split('').reverse().join('');
}