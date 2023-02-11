/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a 
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word 
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1


appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

function appleCounter(arr) {
  var getAllKeys = Object.keys(arr);

  let count=0;
 
    for(let i=0;i<getAllKeys.length;i+=1) {
      keyName=getAllKeys[i]
      // using index of to check if the object key name have a matched string
      if (keyName.indexOf('apple') !== -1) {
        count+=1
      }
    }
  
  return count
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;