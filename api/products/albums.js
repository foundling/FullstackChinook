const albumsRouter = require('koa-router')();
const path = require('path');
const client = require(path.join(__dirname,'..','..','db','client'));
const JSONStream = require('JSONStream');

albumsRouter.get('/', function(ctx, next) {

    const searchTerm = ctx.query.search ? `%${ ctx.query.search }%` : '%';

    ctx.response.status = 200; 
    ctx.response.type = 'application/json; charset=utf-8';

    ctx.body = client('albums')
        .select('Title','AlbumId as id') 
        .where('Title','like', searchTerm)
        .orderBy('Title','asc')
        .distinct('Title')
        .stream()
        .pipe(JSONStream.stringify());

});

albumsRouter.get('/:albumName', function(ctx, next) {

    const { albumName } = ctx.params;

    ctx.response.status = 200; 
    ctx.response.type = 'application/json; charset=utf-8';

    ctx.body = client('albums')
        .select('Title','AlbumTitle as id')
        .where('Title','like',`%${ albumName }%`)
        .stream()
        .pipe(JSONStream.stringify());

});

module.exports = albumsRouter; 
