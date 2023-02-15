const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
   let queue=[start];
  let visited=new Set();
  visited.add(start)
let dist={},pred={};
pred[start]=-1
for (let i = 1; i <7; i++) 
    dist[i] = Infinity;
  
dist[start]=0
  while(queue.length>0){
      let node=queue.shift()
      for(let nei of adjList[node])
        {
            if (!visited.has(nei)&& dist[node]+1<dist[nei])
            {
                visited.add(nei)
                dist[nei]=(dist[node]||0)+1
                pred[nei]=node
                queue.push(nei)
                
            }
        }
        if (adjList[node].length==0)
        return false
  }
  
  let res=[]
  while (pred[end]!=-1)
    {
        res.push(end)
        end=pred[end]
    }
    res.push(start)
    res.reverse()
    return dist[end]
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false