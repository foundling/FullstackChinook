const path = require('path');
const albums = require(path.join(__dirname,'albums'));
const artists = require(path.join(__dirname,'artists'));
const playlists = require(path.join(__dirname,'playlists'));

module.exports = { albums, artists, playlists };
