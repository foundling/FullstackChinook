const express = require('express');
const path = require('path');
const playlistsRouter = express.Router({ mergeParams: true });
const client = require(path.join(__dirname,'..','..','db','client'));
const JSONStream = require('JSONStream');

const playlistSelectCriteria = [ 
    'playlists.Name as playlistName',
    'tracks.TrackId as trackId',
    'tracks.Name as trackName',
    'tracks.Composer as composer',
    'tracks.Milliseconds as durationMS',
    'tracks.UnitPrice as price'
];

playlistsRouter.get('/', function(req, res) {

    /* 
     * route: '/playlists'
     * returns: sorted list of all unique playlist names 
     */

    const searchTerm = req.query.search ? `%${ req.query.search }%` : '%';
    const query = client('playlists')
        .distinct('playlists.PlaylistId')
        .select('Name', 'PlaylistId as id')
        .where('playlists.Name','like', searchTerm) 
        .orderBy('playlists.Name','asc')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

playlistsRouter.get('/:playlistName', function(req, res) {

    const { playlistName } = req.params;

    const query = client('playlists')
        .join('playlist_track','playlists.PlaylistId','=','playlist_track.PlaylistId')
        .join('tracks','playlist_track.TrackId','=','tracks.TrackId')
        .select(...playlistSelectCriteria)
        .where('playlists.Name','=',playlistName)
        .orderBy('playlists.Name','tracks.Name','tracks.Composer','asc')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

module.exports = playlistsRouter; 
