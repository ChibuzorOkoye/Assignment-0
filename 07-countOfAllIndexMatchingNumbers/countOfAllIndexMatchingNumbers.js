function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let count = 0;
  
  for(let i = 0; i < nums.length; i++) { 
    if(nums[i] == i) {
      count++;
      }
    }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
console.log(countOfAllIndexMatchingNumbers([2,1,2,4,4]))