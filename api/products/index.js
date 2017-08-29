const express = require('express');
const productsRouter = express.Router({ mergeParams: true });

const artistsRouter = require('./artists');
const albumsRouter = require('./albums');
const playlistsRouter = require('./playlists');

productsRouter.use('/artists', artistsRouter);
productsRouter.use('/albums', albumsRouter);
productsRouter.use('/playlists', playlistsRouter);

module.exports = productsRouter; 
