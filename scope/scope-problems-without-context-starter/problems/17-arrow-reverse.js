/***********************************************************************
Write a function arrowReverseString(str) that accepts a string and returns that string
reversed. 

Write this function using a fat arrow function!

Examples:
let result1 = arrowReverseString("hello"); // returns "olleh"
let result2 = arrowReverseString("garden"); // returns "nedrag"
let result3 = arrowReverseString("potato"); // returns "otatop"


***********************************************************************/

// your code here!
let arrowReverseString=(string)=>{
  let res=[]
  let val=string.length;
  function reverse(){
    if (val>0){
      val=string.pop()
      string.unshift(val)
      val-=1
      console.log(string)
      return reverse
    }
    else 
      return string
  }
  return reverse
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = arrowReverseString;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
