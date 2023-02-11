/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
  function smallest(nums){
    let mini=100000,index=0;
    for (let i=0;i<nums.length;i++){
      if(nums[i]<mini)
      {
        mini=nums[i]
        index=i 
      }

    }
    return index
  }
  function recur(nums){
    if (nums.length==0)
      return 
    else{
      let small=smallest(nums)
      let temp=nums[small]
      nums[small]=nums[nums.length-1]
      nums[nums.length-1]=temp 
      sorted.push(nums.pop()) 
      recur(nums)
  } 
}

recur(nums,sorted)
return sorted
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sort;
} catch (e) {
  module.exports = null;
}
