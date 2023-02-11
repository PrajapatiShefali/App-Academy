function myMap(inputArray, callback) {
  let res=[];
  for(let ele of inputArray){
    res.push(callback(ele))
  }
  return res 
}

module.exports = myMap;