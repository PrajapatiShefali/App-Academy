/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(arr){
  let ans=[]
  function recur(arr,res,index){
    if (0==arr.length){
      ans.push(res.slice() )
      return 
    }
    for(let i=0;i<arr.length;i++){
      res.push(arr[i])
      let first=arr.slice(0,i);
      let sec=arr.slice(i+1);
      let neww=first.concat(sec)
      recur(neww,res,i+1)
      res.pop()
    }
  }
  recur(arr,[],0)
  return ans 
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
