function stretch(timeleft) {
  
   return new Promise((resolve,reject)=>{
      
        
        if (timeleft>=1000){
          setTimeout(()=>{
          console.log("done stretching")
          return resolve(timeleft-1000)
        },1000)
      }
        else {
          return reject(msg="Error: you dont have enough time to stretch")
      }
    })
  }
    
  

function runOnTreadmill(timeleft) {
   return new Promise((resolve,reject)=>{
        if (timeleft>=500){
          setTimeout(()=> {
          console.log("done running on treadmill")
          return resolve(timeleft-500)
        },500)
      }
        else {
          return reject("Error: you dont have enough time to run on treadmill")
          }
   
  })
}
  


function liftWeights(timeleft) {
   return new Promise((resolve,reject)=>{
             
        if (timeleft>=2000){
          setTimeout(()=>{ 
          console.log("done lifting weights")
          return resolve(timeleft-2000)
        },2000)
      }
      else 
        return reject("Error: you dont have enough time to lift weights")
    
  })
  }
    

function workout(timeleft) {
  return stretch(timeleft).then(runOnTreadmill).then(liftWeights).then((timeleft)=> 
  console.log(`done working out with ${timeleft / 1000} seconds left`)
 ).catch(reason=>console.log(reason))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/

//workout(500);
  // should print out the following:
  //   Error:  you dont have enough time to stretch


 //workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


 //workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


 workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left