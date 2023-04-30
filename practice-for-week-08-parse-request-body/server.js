const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
let http=require('http')
// Your code here

server = http.createServer((req, res) => {
    // your code for assembling the request body string...
    res.setHeader("Content-Type","application/x-www-form-urlencoded")
    let reqBody = '';
    req.on('data', (data) => {
      reqBody += data+' ';
      console.log(reqBody)
    });

    req.on("end", () => {
      // your code for parsing the request body string into an object...
      console.log(reqBody);
      obj=parseBody(reqBody)
      req.body=obj
      sendFormPage(req, res); // needs to be called even if the request doesn't have a body
    });
  });
server=server.listen(5000)
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };