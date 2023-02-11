function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let ans=[];
    for(let i=0;i<arr.length;i+=1){
        if (i%2==1)
            ans.push(arr[i])
    }
    return ans
}

function oddReverse(arr) {
    let ans=[];
    for(let i=0;i<arr.length;i+=1){
        if (i%2==1)
            ans.unshift(arr[i])
    }
    return ans;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let ans=[]
    n=arr.length;
    i=0
    while(2**i<n){
        ans.push(arr[2**i])
        i+=1 
    }
    return ans;
}

function nthPower(arr, N) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let ans=[]
    n=arr.length;
    i=0
    while(N**i<n){
        ans.push(arr[N**i])
        i+=1 
    }
    return ans;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    n=arr.length;
    arr.splice(n/2+n%2,n)
    return arr 

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    n=arr.length;
    arr.splice(0,n/2+n%2)
    return arr 
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}