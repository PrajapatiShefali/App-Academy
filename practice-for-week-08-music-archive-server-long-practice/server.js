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
    // GET /artists
      if (req.method==='GET' && req.url==="/artists"){
        res.setHeader("Content-Type","application/json")
        const resBody=JSON.stringify(artists)
        res.statusCode=200
        res.write(resBody)
        return res.end()
      }
    // GET /artists/artistsId
    if (req.method==='GET' && req.url.startsWith("/artists/")){
      let id=req.url.split('/')[2]
      res.setHeader("Content-Type","application/json")
      const spec=artists.filter(artist=>artist)
      console.log(id,artists,spec)
      const resBody=JSON.stringify(artists)
      res.statusCode=200
      res.write(resBody)
      return res.end()
    }

    // POST /artists -add an artist


    // PUT /artists/artistid edit specified artist

    // DELETE /artists/:ArtistId delete specified artist

    // GET /artists/:ArtistId/albums get all albumns of specified artists

    // GET /albums/:albumnid get specific album

    //POST /artists/:artistid/albums add an albumn to artists

    //PUT /albums/:albumnid edit specific album


    //DELETE /albums/:albumnid delete specific album

    // GET /artists/:ArtistId/songs get all songs of specific artist

    // GET /albums/:albumnid/songs get all songs of specifc album

    //GET /trackNumbers/:trackNumber/songs get all songs of specified track number

    //GET /songs/:songsid get specifc song

    //POST /albums/:albumnid/songs  add a song to album


    // PUT /songs/:songsid edit specific song

    //DELETE /songs/:songsid delete specific song

    // res.statusCode = 404;
    // res.setHeader('Content-Type', 'application/json');
    // res.write("Endpoint not found");
    // return res.end();
  });
});

const port = 5001;

server.listen(port, () => console.log('Server is listening on port', port));