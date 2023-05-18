const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
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
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
      if (req.method=='GET' && req.url=='/'){
        let htmlpage=fs.readFileSync("./views/new-player.html",'utf-8')
        res.setHeader("Content-Type","text/html")
        let string=world.availableRoomsToString()

        htmlpage=htmlpage.replace(/#{availableRooms}/g,string)
        res.statusCode=200
        res.end(htmlpage)
        return 
      }
    // Phase 2: POST /player
    if (req.method=='POST' && req.url=='/player'){
      res.setHeader('Content-Type',"x-www-form-urlencoded")
      res.statusCode=302
   
      console.log("r",req.body)
      player=new Player(req.body.name,world.rooms[req.body.roomId])
      
      
      res.setHeader("Location","/rooms/"+req.body.roomId)

      res.end()
      return 
    }
    // Phase 3: GET /rooms/:roomId
    if (req.method=='GET' && req.url.startsWith("/rooms") &&  req.url.split('/').length === 3){
      const urlParts=req.url.split("/")
      console.log("url",urlParts,req.body)
      let roomId=urlParts[2]
      let htmlpage=fs.readFileSync("./views/room.html",'utf-8')
      let resBody;
   
      resBody=htmlpage.replace(/#{roomName}/g, player.currentRoom.name)
      .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
      .replace(/#{exits}/g, player.currentRoom.exitsToString())
      .replace(/#{inventory}/g, player.inventoryToString());

      
      res.setHeader("Content-Type","text/html")
      res.statusCode=200

      
      return res.end(resBody)
    }
    // Phase 4: GET /rooms/:roomId/:direction
    if (req.method=='GET' && req.url.startsWith("/rooms") &&  req.url.split('/').length === 4) {
      
      let urlParts=req.url.split('/')
      let direction=urlParts[3]
      console.log(urlParts)
      player.move(direction[0]);
      let htmlpage=fs.readFileSync("./views/room.html",'utf-8')
      let resBody;
   
      resBody=htmlpage.replace(/#{roomName}/g, player.currentRoom.name)
      .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
      .replace(/#{exits}/g, player.currentRoom.exitsToString())
      .replace(/#{inventory}/g, player.inventoryToString());

      
      
      res.setHeader("Content-Type","text/html")
      res.statusCode=200
      res.write(resBody)
      
      return res.end(resBody)
    }
    // Phase 5: POST /items/:itemId/:action
    if (req.method === 'POST' && req.url.startsWith('/items/')) {
      const [preface, location, itemid, action] = req.url.split('/');


      switch (action) {
        case 'take':
          player.takeItem(itemid)
          break;
        case 'drop':
          player.dropItem(itemid)
          break
        case 'eat':
          player.eatItem(itemid)
          break

      }
      res.statusCode=302 
      res.setHeader("Location","/rooms/"+player.currentRoom.id)
      
      return res.end()
    }
    // Phase 6: Redirect if no matching route handlers
    console.log('no matching handler');

    res.statusCode = 302;
    res.setHeader('location', `/rooms/${player.currentRoom.name}`);
    return res.end();
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));