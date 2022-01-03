function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < nums.length; i++)
  {
    if (nums[i] < target)
    {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
//console.log(countOfAllNumbersSmallerThanTarget([1,5,6,8,25,45,4], 30));