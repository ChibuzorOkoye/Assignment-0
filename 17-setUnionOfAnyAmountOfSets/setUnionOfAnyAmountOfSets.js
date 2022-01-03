function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;

  const set = new Set();
  for(let i = 0; i < args.length; i++)
  {
    set.add(args[i]);
  }
    return set;
  
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
console.log(setUnionOfAnyAmountOfSets([1,2,3,4],[5,6,7,8],[9,10,11,12]))
console.log(new Set([1,2,3,4,5,6,7,8,9,10,11,12]))