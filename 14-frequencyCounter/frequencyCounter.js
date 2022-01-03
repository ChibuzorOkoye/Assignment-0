function frequencyCounter(word) {
  // Insert code here;

  let arr = {}

  word.split('').forEach((item) => 
  {
    arr[item] = (arr[item] || 0) + 1;

  });
  return arr;
}

// Do not edit this line;
module.exports = frequencyCounter;
//console.log(frequencyCounter("otto"));