function reverseString(string) {
  try {
    let res=[];
    string=string.split('')
    while (string.length>0){
      res.push(string.pop())
    }
    return res.join("")
  }
  catch(e){
    return Error("not a string") 
  }
 
};
module.exports=reverseString
// console.log(reverseString(2))