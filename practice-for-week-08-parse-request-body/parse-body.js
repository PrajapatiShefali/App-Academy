function firstStep(input) {
 input=input.split("&")
 return input
}

function secondStep(input) {
  input=input.map((val)=>val.split("="))
  return input
}

function thirdStep(input) {
  input=input.map((string)=>string=string.toString().replace(/\+/g," ").split(","))
  return input
  
}

function fourthStep(input) {
  input=input.map((val)=>val=decodeURIComponent(val).split(','))
  return input
}

function fifthStep(input) {
  let obj={}
  input.reduce((acc,pairs,i)=>{
    obj[pairs[0]]=pairs[1]
  },{})
  return obj
}

function parseBody(str) {
  input=firstStep(str)
  input=secondStep(input)
  input=thirdStep(input)
  input=fourthStep(input)
  input=fifthStep(input)
  return input
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};