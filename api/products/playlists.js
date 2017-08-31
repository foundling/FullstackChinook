const path = require('path');
const playlistsRouter = require('koa-router')();
const client = require(path.join(__dirname,'..','client'));
const JSONStream = require('JSONStream');

const playlistSelectCriteria = [ 
    'playlists.Name as playlistName',
    'tracks.TrackId as trackId',
    'tracks.Name as trackName',
    'tracks.Composer as composer',
    'tracks.Milliseconds as durationMS',
    'tracks.UnitPrice as price'
];

playlistsRouter.get('/', function(ctx, next) {

    const searchTerm = ctx.query.search;
    const searchParam = searchTerm ? `%${ searchTerm }%` : '%';

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';

    ctx.body = client('playlists')
        .distinct('playlists.PlaylistId')
        .select('Name', 'PlaylistId as id')
        .where('playlists.Name','like', searchParam) 
        .orderBy('playlists.Name','asc')
        .stream()
        .pipe(JSONStream.stringify());

});

playlistsRouter.get('/:playlistName', function(ctx, next) {

    const { playlistName } = ctx.params;

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';

    ctx.body = client('playlists')
        .join('playlist_track','playlists.PlaylistId','=','playlist_track.PlaylistId')
        .join('tracks','playlist_track.TrackId','=','tracks.TrackId')
        .select(...playlistSelectCriteria)
        .where('playlists.Name','=',playlistName)
        .orderBy('playlists.Name','tracks.Name','tracks.Composer','asc')
        .stream()
        .pipe(JSONStream.stringify());

});

module.exports = playlistsRouter; 
