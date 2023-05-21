/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
    return 1;
}
async function num2() {
    return 2;
}

console.log('num1', num1());
console.log('num2', num2());
num2().then((res)=>console.log(num2(),res))

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting(){
    const wait=await num2();
    console.log('waiting',wait)
}
waiting()



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitFormCustomPromise(){
    const promise=new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('done')
        },1000)
    })
    const result=await promise
    console.log('my promise',result)
}
waitFormCustomPromise()

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('done')
    },2000)
}).then((res)=>console.log('my promise using then is',res))


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
    
    return new Promise(resolve => setTimeout(resolve, ms));

  }
function trigger(){
    wait(4000).then((res)=>console.log('triggered'));
}
trigger()

/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
function randomPromise(randomValue){
    return new Promise((resolve,reject)=>{
        if (randomValue>0.5){
            resolve("sucess")
        }
        else{
            reject("aborted")
        }
    })
}
randomPromise(0.7).then((res)=>console.log("for value=0.7",res))
for (let i=0;i<10;i++){
    const random=Math.random();
    wait(2000+i*1000).then(()=>randomPromise(random))
    .then((res)=>console.log(res,"sucess by",i,random))
    .catch((res)=>console.log(res,"aborted by",i,random))
}
/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + i * 1000);

    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await randomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};
for (let i = 1; i < 10; i++) {
    tryTryAgain(i);
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log('END OF PROGRAM');
