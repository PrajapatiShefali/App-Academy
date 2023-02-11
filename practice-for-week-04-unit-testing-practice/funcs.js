function isFive(num) {
  if (num===5)
  return true
  else
  return false
}

function isOdd(number) {
  if (!(typeof number=='number'))
  throw new Error("Not a Number")
  else{
  if (number%2!==0)
  return true 
  else 
  return false 
  }
}

function myRange(min, max, step = 1) {
    let ans=[];
    for (let i=min;i<=max;i+=step)
    {
      ans.push(i)
    }
    return ans 
}


module.exports = { isFive, isOdd, myRange };
console.log(isOdd(8))
console.log(isFive(5))
console.log(myRange(1,10,1))