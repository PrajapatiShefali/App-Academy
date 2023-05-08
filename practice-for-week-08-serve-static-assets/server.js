const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  let htmlfile=fs.readFileSync('index.html','utf-8')
  console.log(req.url,req.url.split('/'))
  if (req.method=='GET' && req.url.startsWith('/static') && req.url.split('/').length==4)
  {
    console.log(req.url)
    let splits=req.url.split('/')
    let category=splits[2]
    let file=splits[3]
    if (category=='images'){
      let imageFile=fs.readFileSync('assets/images/'+file)
      res.setHeader('Content-Type','image/jpeg')
      res.write(imageFile)
    }
    else if (category=='css'){
      let cssFile=fs.readFileSync('assets/css/'+file,'utf-8')
      res.setHeader('Content-Type','text/css')
      res.write(cssFile)
    }
  }

    res.end(htmlfile)
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));