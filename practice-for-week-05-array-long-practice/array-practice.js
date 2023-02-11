const findMinimum = arr => {
  if (arr.length==0)
  return undefined
  let mini=1000000
  for (let i=0;i<arr.length;i++)
    mini=Math.min(mini,arr[i])
  return mini
};

const runningSum = arr => {
  if (arr.length==0)
  return []
  let ans=[]
  ans[0]=arr[0]
  for (let i=1;i<arr.length;i++)
    ans.push(ans[i-1]+arr[i])
  return ans
};

const evenNumOfChars = arr => {

  let count=0
  for(let ele of arr)
    {
      if (ele.length%2==0)
        count+=1
    }
    return count
};

const smallerThanCurr = arr => {
  let ans=[]
  for (let i=0;i<arr.length;i++){
    let count=0;
    for (let j=0;j<arr.length;j++){
      if (i!=j && arr[i]>arr[j])
      count+=1
    }
    ans.push(count)
  }
  return ans
};

const twoSum = (arr, target) => {

  arr.sort()
  let i=0,j=arr.length-1
  while (i<j)
  {
    summ=arr[i]+arr[j]
    if (summ==target)
      return true 
    else if(summ<target)
    i+=1
    else 
    j-=1
  }
  return false
};

const secondLargest = arr => {

  arr.sort()
  return arr[arr.length-2]
};

const shuffle = (arr) => {
  let maxi=0
  for (i=0;i<arr.length;i++)
    maxi=Math.max(maxi,arr[i])
  let ans=[-1]
  for (i=0;i<arr.length;i++)
    { 
      val=Math.floor(Math.random() * maxi)
      while(!ans.includes(val)){
        ans.pop()
        val=Math.floor(Math.random() * maxi)

        ans.push(val)
      
        }
    }
  return ans
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
console.log(runningSum([1,2]))
smallerThanCurr([8,1,2,2,3])
shuffle([2, 5, 1, 3, 4, 7])