function stretch() {
  function stretchpromise(msg)
  {  return new Promise((resolve)=>{
      setTimeout(()=>resolve(msg),2000)
    }).then((msg)=>console.log(msg))
  }
    return stretchpromise("done stretching")
  }

function runOnTreadmill() {
  function runOnTreadmillpromise(msg)
  {  return new Promise((resolve)=>{
      setTimeout(()=>resolve(msg),500)
    }).then((msg)=>console.log(msg))
  }
    return runOnTreadmillpromise("done running on treadmill")
  }


function liftWeights() {
  function stretchpromise(msg)
  {  return new Promise((resolve)=>{
      setTimeout(()=>resolve(msg),2000)
    }).then((msg)=>console.log(msg))
  }
    return stretchpromise("done lifting weights")
  
}

function workout() {
  return stretch().then(runOnTreadmill).then(liftWeights).then(()=> setTimeout(()=>console.log("done working out"),2000))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

stretch("done");
workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out