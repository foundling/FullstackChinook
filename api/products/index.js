const productsRouter = require('koa-router')();

const artistsRouter = require('./artists');
const albumsRouter = require('./albums');
const playlistsRouter = require('./playlists');

productsRouter.use('/products/artists', artistsRouter.routes());
productsRouter.use('/products/artists', artistsRouter.allowedMethods());

productsRouter.use('/products/albums', albumsRouter.routes());
productsRouter.use('/products/albums', albumsRouter.allowedMethods());

productsRouter.use('/products/playlists', playlistsRouter.routes());
productsRouter.use('/products/playlists', playlistsRouter.allowedMethods());

module.exports = productsRouter; 
