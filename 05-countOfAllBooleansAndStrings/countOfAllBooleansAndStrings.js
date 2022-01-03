function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let count = 0;
  for(let i = 0; i < arr.length; i++)
  {
    let check = typeof arr[i]; 
    if (check === "boolean")
    {
    count++;
    }
    else if(check === "string")
    {
      count++;
    }
  }
 
  return count;

}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
//console.log(countOfAllBooleansAndStrings(["hey", "there", "hello", "there", "world", false]))