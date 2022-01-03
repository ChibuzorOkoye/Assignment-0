class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            // found the key
            return true;
        } else if (nums[middle] < target) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
	// key wasn't found
    return false;
}
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
let bin = new MySolution;
console.log(bin.binarySearch([1,2,3,4], 3))