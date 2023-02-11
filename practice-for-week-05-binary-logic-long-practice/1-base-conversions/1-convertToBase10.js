// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  let cnt=0;
  str=str.split('')
  str.reverse()
  for(let i=0;i<str.length;i++){
    val=str[i]=='1'?1:0
    cnt+=((2**i)*val)
  }
  return cnt
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914