// Convert the integers in the console.logs below to base 16:

/******************************************************************************/
let convertToBase2=require("./2-convertToBase2")
const convertToBase16 = element => {
  let mapp={10:'a',11:'b',12:'c',13:'d',14:'e',15:'f'}
  let str=convertToBase2(element)
  let cnt=0;
  str=str.split('')
  str=str.slice(2,str.length)
  str.reverse()
  let ans=[]
  for(let i=0;i<str.length;i++){
    val=str[i]=='1'?1:0
    cnt+=((2**(i%4))*val)
    if (i!=0 && i%4==0){
      if (mapp[cnt])
        ans.push(mapp[cnt])
      else 
        ans.push(cnt)
      cnt=0

    }
  }
  console.log(ans)
  return cnt
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
// console.log(convertToBase16(123)); // 0x7b
// console.log(convertToBase16(1000)); // 0x3e8

// console.log('––––––');

// console.log(convertToBase16('0b1100')); // 0xc
// console.log(convertToBase16('0b0101')); // 0x5
// console.log(convertToBase16('0b1000')); // 0x8
// console.log(convertToBase16('0b0111')); // 0x7

// console.log('––––––');

// console.log(convertToBase16('0b10100101')); // 0xa5
// console.log(convertToBase16('0b11111111')); // 0xff
// console.log(convertToBase16('0b01010101')); // 0x55
// console.log(convertToBase16('0b00110011')); // 0x33