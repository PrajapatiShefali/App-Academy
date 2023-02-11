// Your code here

Array.prototype.isEqual=function(array){

    for (let i=0;i<array.length;i++){
        if (array[i]!=this[i])
            return false 
    }
    return true 
}
module.exports=Array 
let arr1=[1,2,3]
console.log(arr1.isEqual([1,2,3]))