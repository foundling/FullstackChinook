const path = require('path');
const albums = require(path.join(__dirname,'albums'));
const artists = require(path.join(__dirname,'artists'));

module.exports = { albums, artists };
