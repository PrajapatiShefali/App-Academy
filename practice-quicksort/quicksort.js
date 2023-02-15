function partition_func(arr,lo,hi,pivot){
  let i=lo,j=lo;
  while (i<=hi){
    if (arr[i]>pivot)
    {i+=1}
    else{
      temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
      i+=1
      j+=1
    }
  }
  return j-1
}
function _quicksort(arr,lo,hi) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if(lo>hi)
    return 
  let pivot=arr[hi]
  let partition_point=partition_func(arr,lo,hi,pivot)
  _quicksort(arr,lo,partition_point-1)
  _quicksort(arr,partition_point+1,hi)
  // Return the left, pivot and right in sorted order

}
function quicksort(arr){
  let new_arr=arr.slice()
  _quicksort(new_arr,0,arr.length-1)
  return new_arr
}

module.exports = [quicksort];
console.log(quicksort([2,3,1,6,5,4]))