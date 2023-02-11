class DynamicArray {

  constructor(defaultSize=4) {
    this.data=Array(defaultSize).fill(0);
    this.capacity=defaultSize
    this.length=0

  }

  read(index) {

    if (index<this.length)
      return this.data[index]
    else
    return undefined
  }

  unshift(val) {

    this.data=[val].concat(this.data)
    this.length+=1
  }

}


module.exports = DynamicArray;
let dynamicArr = new DynamicArray();
// dynamicArr.data[0] = 99;
// dynamicArr.length=1
// console.log(dynamicArr.read(0),dynamicArr.read(1))
dynamicArr.unshift(2)
