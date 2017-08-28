const express = require('express');
const path = require('path');
const productRouter = express.Router();

const albums = require(path.join(__dirname,'albums'));
const artists = require(path.join(__dirname,'artists'));
const playlists = require(path.join(__dirname,'playlists'));

productRouter.use(albums);
productRouter.use(artists);
productRouter.use(playlists);

module.exports = productRouter;
