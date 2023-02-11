const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  let ans=[];
  console.time("start")
  for(let i=increment;i<=10*increment;i+=increment)
   { 
    let starttime=Date.now()

    ans.push(addNums(i))
    let endtime=Date.now()
    // Your code here
  console.log( (endtime-starttime))
   }
   console.timeEnd("start")
  
  // Then, add timing code

  

}


function addManyNums10Timing(increment) {
    let ans=[];
    console.time("start")
  for(let i=increment;i<=10*increment;i+=increment){
    let starttime=Date.now()

    // console.timeLog("start")
    ans.push(addManyNums(i)) 
    let endtime=Date.now()
    // Your code here
  console.log( (endtime-starttime))
  }
  console.timeEnd("start")
// Then, add timing code
 
}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);