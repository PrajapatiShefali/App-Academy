function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum=findBigger(num1,num2);
  return bigNum*2
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum=findBigger(num1,num2)/3;
  return bigNum
}
function findBigger(num1,num2){
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum;
  } else {
    bigNum = num2;
    return bigNum ;
  }

}
function findSmaller(num1,num2){
  let bigNum;
  if (num1 <num2) {
    bigNum = num1;
    return bigNum;
  } else {
    bigNum = num2;
    return bigNum ;
  }

}
function eatMostTacos(sum1, sum2) {
  let bigNum=findBigger(sum1,sum2);
  return `I ate ${bigNum} tacos.`
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog=findSmaller(weight1,weight2)
  return `I adopted a dog that weighs ${smallDog} pounds.`
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};