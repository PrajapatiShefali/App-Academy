// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length==1)
  return [...arr]
   
  let mid=arr.length/2
  let leftarr=arr.slice(0,mid)
  let rightarr=arr.slice(mid,arr.length)
  let left=mergeSort(leftarr)
  let right=mergeSort(rightarr)
  return merge(left,right)
  // Divide the array in half

  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let ret=[];
  let i=0,j=0;
  while (i<arrA.length && j<arrB.length){
    if (arrA[i]<arrB[j])
    {ret.push(arrA[i])
    i+=1}
    else 
    {ret.push(arrB[j])
    j+=1}
  }
  while (i<arrA.length)
    {
      ret.push(arrA[i])
      i+=1
    }
    while (j<arrB.length)
    {
      ret.push(arrB[j])
      j+=1
    }
  // Point to the first value of each array
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
    return ret 
}

module.exports = [merge, mergeSort];

