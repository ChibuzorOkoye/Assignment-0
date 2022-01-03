function isPalindrome(word) {
  // Insert code here;

  let reverse = word.split("").reverse().join("")

  if(word === reverse)
  return true;

  else 
  return false;
}

// Do not edit this line;
module.exports = isPalindrome;
console.log(isPalindrome("otto"))