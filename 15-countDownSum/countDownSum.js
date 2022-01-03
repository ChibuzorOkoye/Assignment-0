class MySolution {
  countDownSum(num) {

    if (num != 0)
    return num + this.countDownSum(num - 1)

    else 
    return num;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;