class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    let end = nums.length - 1;

        let middle = Math.floor(nums.length / 2);

        if (nums[middle] === target) 
        {
            // found the key
            return true;
        } 
        else if (nums[middle] < target) 
        {
            // continue searching to the right
            let arr = nums.slice(middle+1, nums.length);
        return this.binarySearch(arr, target);
        } 
        else if (nums[middle] > target) 
        {
            // search searching to the left
            let arr = nums.slice(0, middle);
        return this.binarySearch(arr, target);
        }

	// key wasn't found
    return false;
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
let bin = new MySolution;
//console.log(bin.binarySearch([1,2,3,4], 3))