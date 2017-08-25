const express = require('express');
const path = require('path');
const playlistRouter = express.Router();
const client = require(path.join(__dirname, '..','..','db','client'));
const JSONStream = require('JSONStream');

const playlistSelectCriteria = [ 
    'playlists.Name as playlistName',
    'tracks.TrackId as trackId',
    'tracks.Name as trackName',
    'tracks.Composer as composer',
    'tracks.Milliseconds as durationMS',
    'tracks.UnitPrice as price'
];

playlistRouter.get('/', (req, res) => {

    res.set('Content-Type', 'application/json; charset=utf-8'); // this solved utf-8 issue 
    const query = client('playlists')
        .join('playlist_track','playlists.PlaylistId','=','playlist_track.PlaylistId')
        .join('tracks','playlist_track.TrackId','=','tracks.TrackId')
        .distinct()
        .select(...playlistSelectCriteria)
        .orderBy('playlists.Name','tracks.Name','tracks.Composer','desc');

    query.stream().pipe(JSONStream.stringify()).pipe(res);

});

playlistRouter.get('/:id', (req, res) => {

    res.set('Content-Type', 'application/json; charset=utf-8');

    const playlistId = req.params.id;
    const query = client('playlists')
        .join('playlist_track','playlists.PlaylistId','=','playlist_track.PlaylistId')
        .join('tracks','playlist_track.TrackId','=','tracks.TrackId')
        .distinct()
        .select(...playlistSelectCriteria)
        .where('playlists.playlistId','=',playlistId)
        .orderBy('playlists.Name','tracks.Name','tracks.Composer','desc');

    query.stream().pipe(JSONStream.stringify()).pipe(res);

});

module.exports = playlistRouter; 
