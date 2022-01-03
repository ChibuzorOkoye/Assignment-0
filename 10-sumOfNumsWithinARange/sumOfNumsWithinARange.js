function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < nums.length; i++)
  {
    if(nums[i] >= start)
    {
      if(nums[i] <= end)
      {
        count++;
      }
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
//console.log(sumOfNumsWithinARange([2,4,5,6,23],4,23));