function anagrams(str1, str2) {
    let map1={};
    if(str1.length!=str2.length)
    return false
    for(let i=0;i<str1.length;i++){
      if(Object.keys(map1).indexOf(str1[i])==-1)
        map1[str1[i]]=1
      else 
      map1[str1[i]]+=1
    }
    for(let i=0;i<str2.length;i++){
      if(Object.keys(map1).indexOf(str2[i])<0 || map1[str2[i]]<0)
        return false
      else 
        map1[str2[i]]-=1 
    }
    return true
    

}


function commonElements(arr1, arr2) {
  let set1=new Set(arr1)
  let set2=new Set(arr2)
  let sol=new Set()
  for (let ele of set1){
    if (set2.has(ele))
    sol.add(ele)
  }
  return [...sol]
}


function duplicate(arr) {
  let set=new Set()
  for(let ele of arr){
    if (set.has(ele))
    return ele 
    set.add(ele)
  }

}


function twoSum(nums, target) {
  nums.sort()
  let i=0,j=nums.length;
  while (i<j){
    summ=nums[i]+nums[j]
    if(summ==target)
    return true
    else if(summ<target)
    i+=1
    else
    j-=1
  }
  return false 
}


function wordPattern(pattern, strings) {
  p2s={}
  s2p={}
  for(let i=0;i<pattern.length;i++){
    if (Object.keys(p2s).indexOf(pattern[i])>=0 &&  p2s[pattern[i]]!=strings[i])
    return false 
    if (Object.keys(s2p).indexOf(strings[i])>=0 && s2p[strings[i]]!=pattern[i])
    return false 
    p2s[pattern[i]]=strings[i]
    s2p[strings[i]]=pattern[i]
  }
  return true 
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];