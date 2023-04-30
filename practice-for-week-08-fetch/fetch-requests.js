/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here

fetch('/products').then(res => { console.log("response status",res.status) });




/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here

fetch('/products').then(res => { console.log("response status",res.ok) });





/* =================== 3. Print the Content-Type Header =================== */

fetch('/products').then(res => { console.log("response status",res.headers.get("Content-Type")) });




/* ============== 4. Print the body of the response as text =============== */

// Your code here

fetch('/products').then(res => { console.log("response status",res.text()) });

