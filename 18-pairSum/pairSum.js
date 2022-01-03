function pairSum(nums, target) {
  // Insert code here;
  let check = false;

  if(nums.length > 1)
  {
    for(let i = 0; i < nums.length; i++)
    {
      for(let j = i+1; j < nums.length; j++)
      {
        if (nums[i] + nums[j] >= target)
        {
          check = true;
        }
      }
      
    }

    return check;
  }
  else{} 
   throw new Error("Error");
}

// Do not edit this line;
module.exports = pairSum;
console.log(pairSum([20,20],20));