function fizzBuzz(start, end) 
{
  // Insert code here;
  let arr = [];
  for(let i = start; i < end+1; i++)
  {
  if (i % 15 == 0) 
  {
    arr.push("FizzBuzz");
  }
  else if (i % 3 == 0)
  { 
    arr.push("Fizz");
  }
  else if (i % 5 == 0) 
  {
    arr.push("Buzz");
  }
  else
  {
    arr.push(i);
  }
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
//console.log(fizzBuzz(2,30));
