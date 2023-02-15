function linearSearch (arr, target) {

  // Can you solve this in one line?
  for (let i=0;i<arr.length;i++){
    if (arr[i]==target)
      return i 
  }
  return -1
};

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices

  // While high and low indices do not overlap...

    // Find the midpoint between high and low indices

    // Compare the target value to the midpoint value

    // If the target equals the midpoint...
      // Return the midpoint index
    // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
    // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1

  // Return -1 if the loop exits with overlapping pointers
  let low=0,high=arr.length
  while (low<=high){
    let mid=Math.floor((high+low)/2)
    if (arr[mid]==target)
    return mid 
    if(arr[mid]<target)
    low=mid+1
    else 
    high=mid-1
  }
  return -1
}
let arr = [];

for (let i = 0 ; i < 1000000 ; i++) {
  arr.push(i);
}
console.log(binarySearch(arr,100))

module.exports = [linearSearch, binarySearch]