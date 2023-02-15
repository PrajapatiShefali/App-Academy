
function bubbleSort(arr) {

    for(let i=0;i<arr.length-1;i++){
      let count=0;
      for(let j=0;j<arr.length-1;j++){
      // If the current value is greater than its neighbor to the right
        if(arr[j]>arr[j+1])
        {
          [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        count+=1
        console.log(arr.join(","));
      }
        // Swap those values

        // Do not move this console.log
      }
        
      if (count==0)
      return
    // If you get to the end of the array and no swaps have occurred, return

    // Otherwise, repeat from the beginning
    }
}

module.exports = bubbleSort;
let arr=[2,4,6,8,1,3,5,7,9];
bubbleSort(arr)
console.log(arr)