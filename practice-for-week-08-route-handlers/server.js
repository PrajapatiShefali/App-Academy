const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    if (req.method=='GET' && req.url=='/'){
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain")
    res.end('Dogs Club')
    }
    else if (req.method=='GET' && req.url=='/dogs'){
      res.statusCode=200;
      res.setHeader("Content-Type","text/plain")
      res.end('Dogs Index'+nextDogId)
    }
    else if (req.method=='GET' && req.url=='/dogs/new'){
      res.statusCode=200;
      res.setHeader("Content-Type","text/plain")
      res.end('Dogs create from page')
    }
    else if (req.method=='POST' && req.url=='/dogs'){
      res.statusCode=302;
       id=getNewDogId()

      res.setHeader("Location","/dogs/"+nextDogId)
      res.end()
    }
    else if (req.method=='GET' && req.url.startsWith('/dogs') && req.url.split('/').length==3){
      res.statusCode=200;
      res.setHeader("Content-Type","text/plain")
      val=req.url.split('/')[2]
      console.log(val)
      res.end('Dog details for dogId:'+val)      
    }
    else if (req.method=='POST' && req.url.startsWith('/dogs') && req.url.split('/').length==3){
      res.statusCode=302;
      val=req.url.split('/')[2]
      res.setHeader("Location","/dogs/"+val)
      console.log(val)
      res.end()      
    }
    else if (req.method=='POST' && req.url.startsWith('/dogs') && req.url.split('/').length==4){
      res.statusCode=200;
      console.log(req.url.split('/'))
      Id=req.url.split('/')[2]
      val=req.url.split('/')[3]
      console.log(val)
      res.end('Dog details to be edited for dogId:'+Id)      
    }
   
    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
    }
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));