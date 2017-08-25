const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 
const client = require(path.join(__dirname,'..','db','client'));
const routes = require(path.join(__dirname,'routes'));
const cors = require('cors');

app.use(cors());
app.use('/api', express.static(path.join(__dirname,'..','public','documentation','api')));
app.use(express.static(path.join(__dirname,'..','public','build')));
app.use('/albums', routes.albums);
app.use('/artists', routes.artists);
app.use('/playlists', routes.playlists);

module.exports = {
    run:  function() {
        app.listen(PORT, () => { console.log(`Up and running on port ${ PORT }.`); }); 
    }
}
