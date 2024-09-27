const http = require('http');
const fs = require('fs');

/* ============================ SERVER DATA ============================ */
let artists = JSON.parse(fs.readFileSync('./seeds/artists.json'));
let albums = JSON.parse(fs.readFileSync('./seeds/albums.json'));
let songs = JSON.parse(fs.readFileSync('./seeds/songs.json'));

let nextArtistId = 2;
let nextAlbumId = 2;
let nextSongId = 2;

// returns an artistId for a new artist
function getNewArtistId() {
  const newArtistId = nextArtistId;
  nextArtistId++;
  return newArtistId;
}

// returns an albumId for a new album
function getNewAlbumId() {
  const newAlbumId = nextAlbumId;
  nextAlbumId++;
  return newAlbumId;
}

// returns an songId for a new song
function getNewSongId() {
  const newSongId = nextSongId;
  nextSongId++;
  return newSongId;
}

/* ======================= PROCESS SERVER REQUESTS ======================= */
const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // assemble the request body
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => { // finished assembling the entire request body
    // Parsing the body of the request depending on the "Content-Type" header
    if (reqBody) {
      switch (req.headers['content-type']) {
        case "application/json":
          req.body = JSON.parse(reqBody);
          break;
        case "application/x-www-form-urlencoded":
          req.body = reqBody
            .split("&")
            .map((keyValuePair) => keyValuePair.split("="))
            .map(([key, value]) => [key, value.replace(/\+/g, " ")])
            .map(([key, value]) => [key, decodeURIComponent(value)])
            .reduce((acc, [key, value]) => {
              acc[key] = value;
              return acc;
            }, {});
          break;
        default:
          break;
      }
      console.log(req.body);
    }

    /* ========================== ROUTE HANDLERS ========================== */

    // Your code here
        // GET /artists/:ArtistId/albums get all albumns of specified artists
        if (req.method==='GET' && req.url.startsWith("/artists") && req.url.endsWith("/albums") && req.url.split("/").length==4){
          console.log("albums")
          let id=req.url.split("/")[2]
          res.setHeader("Content-Type","application/json")
          let list=Object.values(albums).filter((album)=>{
            return album.artistId==id
          })
          console.log(list)
          res.body=JSON.stringify(list)
          res.statusCode=200
          return res.end(JSON.stringify(list))
        }
            // GET /artists/:ArtistId/songs get all songs of specific artist
    else if (req.method==='GET' && req.url.startsWith("/artists") && req.url.endsWith("/songs") && req.url.split("/").length==4){
      console.log("songs")
      let id=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      let list=Object.values(albums).map((album)=>{
        if (album.artistId==id)
          {
            return album.albumId
          }
      })
      console.log(list)
      let songlist=Object.values(songs).filter((song)=>{
          
            if (list.includes(song.albumId)){
              return true
            }
          
      })
      console.log(songlist)
      res.body=JSON.stringify(songlist)
      res.statusCode=200
      return res.end(JSON.stringify(songlist))
    }
    // GET /artists
      else if (req.method==='GET' && req.url==="/artists"){
        res.setHeader("Content-Type","application/json")
        const resBody=JSON.stringify(artists)
        res.statusCode=200
        res.write(resBody)
        return res.end()
      }
    // GET /artists/artistsId
    else if (req.method==='GET' && req.url.startsWith("/artists/")){
      let id=req.url.split('/')[2]
      res.setHeader("Content-Type","application/json")
      const spec=Object.values(artists).filter((artist)=>artist.artistId==id)

      const resBody=JSON.stringify(spec)
      res.statusCode=200
      res.write(resBody)
      return res.end()
    }

    // POST /artists -add an artist
    else if (req.method==='POST' && req.url=="/artists"){
      let id=getNewArtistId()
      
      let obj={
        name:`New artisit ${id}`,
        artistId:id 
      }
      artists[id]=obj;
      req.body=obj
      // req.headers({"Content-Type":"application/json"})
      // console.log(artists,obj)
      res.statusCode=200
      res.write("Added artist successfully")
      return res.end()
    }

    // PUT /artists/artistid edit specified artist
    else if (req.method==='PUT' && req.url.startsWith("/artists") && req.url.split("/").length==3){

      let id=req.url.split("/")[2]
      
      artists[id].name=`Update artist ${id}`
      // console.log(artists[`${id}`].name)
      
      // req.headers({"Content-Type":"application/json"})
      // console.log(artists,obj)
      res.statusCode=200
      res.write("Updated artist successfully")
      return res.end()
    }
    // DELETE /artists/:ArtistId delete specified artist
    else if (req.method==='DELETE' && req.url.startsWith("/artists") && req.url.split("/").length==3){

      let id=req.url.split("/")[2]
      console.log(artists[id])
      delete artists[id]
      // console.log(artists[`${id}`].name)
      
      // req.headers({"Content-Type":"application/json"})
      // console.log(artists,obj)
      res.statusCode=200
      res.write("Deleted artist successfully")
      return res.end()
    }

    // GET /albums/:albumnid get specific album
    else if (req.method==='GET' && req.url.startsWith("/albums") && req.url.split("/").length==3){

      let id=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      // let list=Object.values(albums).filter((record)=>record.albumId==id)
      let list=albums[id]
      console.log(list)
      res.body=JSON.stringify(list)
      res.statusCode=200
      return res.end(JSON.stringify(list))
    }
    //POST /artists/:artistid/albums add an albumn to artists
    else if (req.method==='POST' && req.url.startsWith("/artists") && req.url.endsWith("/albums") && req.url.split("/").length==4){
      let id=getNewAlbumId()
      let artistId=req.url.split("/")[2]
      // let artistobj=Object.values(artists).filter((artist)=>{
      //   artist.artistId==artistId
      // })
      // artistobj.albums.
      let obj={
        name:`New album ${id}`,
        albumId:id ,
        artistId:artistId
      }
      albums[id]=obj;
      req.body=obj
      // req.headers({"Content-Type":"application/json"})
      // console.log(artists,obj)
      res.statusCode=200
      res.write("Added album successfully")
      return res.end()
    }
    //PUT /albums/:albumnid edit specific album
    else if (req.method==='PUT' && req.url.startsWith("/albums") && req.url.split("/").length==3){

      let id=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      // let list=Object.values(albums).filter((record)=>record.albumId==id)
      let album=albums[id]
      // console.log(list)
      album.name="Update album "+id
      // res.body=JSON.stringify(list)
      res.statusCode=200
      return res.end("Album updated successfully")
    }

    //DELETE /albums/:albumnid delete specific album
    else if (req.method==='DELETE' && req.url.startsWith("/albums") && req.url.split("/").length==3){

      let id=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      // let list=Object.values(albums).filter((record)=>record.albumId==id)
      delete albums[id]
      
      res.statusCode=200
      return res.end("Album deleted successfully")
    }

    // GET /albums/:albumnid/songs get all songs of specifc album
    else if (req.method==='GET' && req.url.startsWith("/albums") && req.url.endsWith("/songs") && req.url.split("/").length==4){

      let id=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      let list=songs[id]
      res.body=JSON.stringify(list)
      res.statusCode=200
      return res.end()
    }
    //GET /trackNumbers/:trackNumber/songs get all songs of specified track number
    else if (req.method==='GET' && req.url.startsWith("/trackNumbers") && req.url.endsWith("/songs") && req.url.split("/").length==4){
      let trackNumber=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      let list=Object.values(songs).filter((song)=>{
        return song.trackNumber==trackNumber
      })
      console.log(list)
      res.body=JSON.stringify(list)
      res.statusCode=200
      return res.end(JSON.stringify(list))
    }
    //GET /songs/:songsid get specifc song
    else if (req.method==='GET' && req.url.startsWith("/songs") && req.url.split("/").length==3){
      let songid=req.url.split("/")[2]
      res.setHeader("Content-Type","application/json")
      let list=songs[songid]
      console.log(list)
      res.body=JSON.stringify(list)
      res.statusCode=200
      return res.end(JSON.stringify(list))
    }
    //POST /albums/:albumnid/songs  add a song to album
    else if (req.method==='POST' && req.url.startsWith("/albums") && req.url.endsWith("/songs") && req.url.split("/").length==4){
      let albumnid=req.url.split("/")[2]
      let songId=getNewSongId()
      let song={
        songId:songId,
        "name": "New song "+songId,
        "trackNumber": songId,
        "albumId": albumnid,
        "lyrics": "Getting born in the state of Mississippi\n"
      }
      songs[songId]=song
      res.statusCode=200
      return res.end(`Added song to albumn ${albumnid}`)
    }

    // PUT /songs/:songsid edit specific song
    else if (req.method==='PUT' && req.url.startsWith("/songs") && req.url.split("/").length==3){
      let songId=req.url.split("/")[2]

      

        songs[songId].name= "New song "+songId+"updated"
        songs[songId].lyrics= "Getting born in the state of Mississippi\n UPDATED"
      
      res.statusCode=200
      return res.end(`Songs ${songId} updated`)
    }
    //DELETE /songs/:songsid delete specific song
    else if (req.method==='DELETE' && req.url.startsWith("/songs") && req.url.split("/").length==3){
      let songId=req.url.split("/")[2]

      

        delete songs[songId]
      res.statusCode=200
      return res.end(`Songs ${songId} deleted`)
    }
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write("Endpoint not found");
    return res.end();
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));