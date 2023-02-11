/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
let reverse=(string)=>{
  let val=0;
  let res=[]
  let n=string.length
  string=string.split("")
  function recur(val){
    if (val>=n)
      return  
    else{
      res.push(string.pop())
      recur(val+1)
    }
  }
  recur(0)
  return res.join("") 
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
