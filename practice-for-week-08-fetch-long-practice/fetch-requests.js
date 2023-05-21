/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
// fetch("/products", {
//     method:"POST",
//     body:new URLSearchParams({
//         name:"Caribbean Delight Coffee",
//         description:"Made by Manatee Coffee",
//         price:11,
//         categories:"grocery"
//     }),
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   })


/* ============================== Phase 2 ============================== */

// Your code here
fetch("/products", {
    method:"POST",
    body:new URLSearchParams({
        name:"Caribbean Delight Coffee",
        description:"Made by Manatee Coffee",
        price:11,
        categories:"grocery"
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then((response)=>{
    console.log(response.status);
    console.log(response.headers.get("Content-Type"))
    console.log(response.url)
    console.log(response.redirected)
    console.log(`response URL = ` + res.url);

  })



/* ============================== Phase 3 ============================== */

// Your code here
// fetch("http://localhost:5000/products", {
//     method:"POST",
//     body:new URLSearchParams({
//         name:"Caribbean Delight Coffee",
//         description:"Made by Manatee Coffee",
//         price:11,
//         categories:"grocery"
//     }),
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded"
//     }
//   })
