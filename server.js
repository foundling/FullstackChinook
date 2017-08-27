const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const api = require(path.join(__dirname,'api','routes'));
const client = require(path.join(__dirname,'db','client'));
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use('/api', express.static(path.join(__dirname,'public','documentation','api')));
app.use(express.static(path.join(__dirname,'public','build')));
app.use(function(req, res, next) {
    res.set('Content-Type', 'application/json; charset=utf-8'); 
    next();
});
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

app.use('/albums', api.albums);
app.use('/artists', api.artists);
app.use('/playlists', api.playlists);

module.exports = {
    run:  function() {
        app.listen(PORT, () => { console.log(`Up and running on port ${ PORT }.`); }); 
    }
}
