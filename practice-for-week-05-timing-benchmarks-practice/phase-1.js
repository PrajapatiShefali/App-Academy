// Adds up positive integers from 1-n
function addNums(n) {
  let ans=0;
  for(let i=1;i<=n;i++)
  ans+=i 
  return ans 
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let ans=0;
  for(let i=1;i<=n;i++)
  ans+=addNums(i) 
  return ans 

}



module.exports = [addNums, addManyNums];