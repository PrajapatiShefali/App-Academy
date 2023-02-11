class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.data=Array(defaultSize).fill(undefined)
    this.length=0 
    this.capacity=defaultSize 
  }

  read(index) {
    if (index<this.length)
      return this.data[index]
    else 
    return undefined 
    
  }

  push(val) {
    if (this.length==this.capacity)
    this.resize()
    this.data[this.length]=val
    // Your code here
    this.length+=1

  }


  pop() {
    let val=this.data[this.length-1]
    delete this.data[this.length-1]
    if (this.length>0)
      this.length-=1

    // Your code here
    return val 
  }

  shift() {
    let val=this.data[0]
    this.data=this.data.splice(1)
    if (this.length>0)
    this.length-=1

    // Your code here
    return val 
    // Your code here
  }

  unshift(val) {
    if (this.length==this.capacity)
      this.resize()
    let i=this.length
    while (i>0){
      this.data[i]=this.data[i-1]
      i-=1
    }
    this.data[0]=val
    // Your code here
    this.length+=1
    }

  indexOf(val) {
    for(let i=0;i<this.length;i++)
      {
        if (val==this.data[i])
        return i 
      }
      return -1
    // Your code here
  }

  resize() {
    this.capacity*=2
    let newdata=Array(this.capacity).fill(undefined)
    for(let i=0;i<this.length;i++)
      {
        newdata[i]=this.data[i]
      }
    this.data=newdata 
    // Your code here
  }

}


module.exports = DynamicArray;
dynamicArr=new DynamicArray(2)
dynamicArr.push(1);
dynamicArr.push(2);
console.log(dynamicArr.length)

dynamicArr.unshift(3);

console.log(dynamicArr.length)
dynamicArr.unshift(4);

console.log(dynamicArr.length)
dynamicArr.unshift(5);

console.log(dynamicArr.length)
dynamicArr.unshift(6);

console.log(dynamicArr.length)