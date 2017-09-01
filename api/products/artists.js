const artistsRouter = require('koa-router')();
const path = require('path');
const client = require(path.join(__dirname,'..','..','db_client'));
const JSONStream = require('JSONStream');

artistsRouter.get('/', function(ctx, next) {

    const { search } = ctx.query;
    const searchTerm = search ? `%${search}%` : '%';

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';
    ctx.body = client('artists')
        .select('Name','ArtistId as id')
        .distinct('Name')
        .where('Name','like', searchTerm)
        .orderBy('Name','asc')
        .stream()
        .pipe(JSONStream.stringify());

});

artistsRouter.get('/:artistName', function(ctx, next) {

    const { artistName } = ctx.params;

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';
    ctx.body = client('artists')
        .select('Name','ArtistId as id')
        .distinct('Name')
        .where('Name','like', `%${ artistName }%`)
        .orderBy('Name','asc')
        .stream()
        .pipe(JSONStream.stringify());

});

module.exports = artistsRouter; 
