// Your code here

let http=require('http')
let app=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html")
    console.log(req);
    console.log(res);

    const responseBody = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World!</title>
        </head>
        <body>
            <h1>Hello there!</h1>
        </body>
        </html>
        `;
    res.statusCode=200;
    res.write(responseBody)
})
app.listen(5001,()=>console.log("Server is listening on port 5000"))