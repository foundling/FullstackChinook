const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const api = require(path.join(__dirname,'api','routes'));
const client = require(path.join(__dirname,'db','client'));
const { utf8JSON, logger } = require(path.join(__dirname,'lib'));
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.static(path.join(__dirname,'client','build')));
app.use(utf8JSON);
app.use(logger);

app.use('/albums', api.albums);
app.use('/artists', api.artists);
app.use('/playlists', api.playlists);

module.exports = {
    run: function() {
        app.listen(PORT, () => { console.log(`Up and running on port ${ PORT }.`); }); 
    }
}
