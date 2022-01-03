function sumOfMinimumAndMaximum(nums) {
  // Insert code here;

  let min = Math.min.apply(Math,nums);
  let max = Math.max.apply(Math,nums);
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;