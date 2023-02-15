function ageSort(users) {
  users.sort((x,y)=>x.age-y.age)
  return users
}

function oddEvenSort(arr) {
  let even=[],odd=[]
  arr.forEach(element => {
    if (element%2==0)
      even.push(element)
    else
    odd.push(element)
  });
  even.sort((x,y)=>x-y)
  odd.sort((x,y)=>x-y)
  arr=odd.concat(even)
  return arr
}

function validAnagrams(s, t) {
  s=s.split("")
  t=t.split("")
 s.sort((x,y)=>x.charCodeAt(0)-y.charCodeAt(0))
 t.sort((x,y)=>x.charCodeAt(0)-y.charCodeAt(0))
 console.log(s,t,s.join('')==t.join(''))
 return s.join('')==t.join('')
}

function reverseBaseSort(arr) {
  function eval(ele){
    {
      if (ele/10<10)
        return 0
      else if (ele/20<20)
        return 1
      else if (ele/30<30)
      return 2
      else if (ele/40<40)
        return 3
      else if (ele/50<50)
        return 4
      else if (ele/100<100)
      return 5
      
     }
     return 6

  }
 arr.sort((a,b)=>(eval(a)-eval(b)))
 console.log(arr)
 return arr
 
}

function frequencySort(arr) {
  let frequencyMap = {};
  
  // Create frequency map
  arr.forEach(element => {
    frequencyMap[element] = frequencyMap[element] ? frequencyMap[element] + 1 : 1;
  });
  
  // Sort elements based on frequency
  let sortedElements = Object.keys(frequencyMap).sort((a, b) => {
    if (frequencyMap[b] === frequencyMap[a]) {
      return b-a;
    } else {
      return frequencyMap[a] - frequencyMap[b];
    }
  });
  
  // Create new array from sorted frequency map
  let result = [];
  sortedElements.forEach(element => {
    for (let i = 0; i < frequencyMap[element]; i++) {
      result.push(element);
    }
  });
  
  return result.map((x)=>parseInt(x));
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
const arr1 = [1, 1, 2, 2, 2, 3];
const arr2 = [2, 3, 1, 3, 2];
const arr3 = [-1, 1, -6, 4, 5, -6, 1, 4, 1]

frequencySort(arr1);        // => [3, 1, 1, 2, 2, 2]
// frequencySort(arr2);        // => [1, 3, 3, 2, 2]
// frequencySort(arr3);