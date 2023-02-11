// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
let res;
try{
  res = sum(null);
}
catch(e){
console.error(e.message);
}
// 2.
function sayName(name){
  if ((typeof name)==='string')
    throw Error("Invalid name! Must be a string!")    
  
}
// tests
try{
  sayName(1);
sayName("Alex");
  }
  catch(e){
    console.error(e.message)
  }
// Your code here

// 3.
function greet(greeting) {
  try{
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  }
  catch(e){
    console.log("Hello World");
  }
}
greet("")