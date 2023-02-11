const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let ans=[];
  for(let i=increment;i<=10*increment;i+=increment)
  ans.push(addNums(i)) 
  return ans 

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let ans=[];
  for(let i=increment;i<=10*increment;i+=increment)
  ans.push(addManyNums(i)) 
  return ans 

}

module.exports = [addNums10, addManyNums10];