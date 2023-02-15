function getNeighbors(row, col, matrix) {
  let ans=[];
  let n=matrix.length;
  let m=matrix[0].length

 
lst=[[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]]
  
for(let i=0;i<8;i++){
  if (row+lst[i][0]>=0 && row+lst[i][0]<n && col+lst[i][1]>=0 && col+lst[i][1]<m && matrix[row+lst[i][0]][col+lst[i][1]]==1)
    ans.push([row+lst[i][0],col+lst[i][1]])
}

return ans 
 
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  // Initialize count to 0
  let visited=new Set()
  let count=0
  let island=0
  let n=matrix.length,m=matrix[0].length
  for(let i=0;i<n;i++){
    for (let j=0;j<m;j++){
      if (matrix[i][j]==1 && !visited.has([i,j].toString()))

      {      island+=1

        visited.add([i,j].toString())
      let stack=[[i,j]]
      while (stack.length>0){
        let [x,y]=stack.pop()
        for (let nei of getNeighbors(x,y,matrix))
        {
          if (!visited.has(nei.toString()))
          {
            stack.push(nei)
            visited.add(nei.toString())
          }
        }
      }}
    }
  }
  return island
  // Iterate through all indices in matrix
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];