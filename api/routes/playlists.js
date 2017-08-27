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

    /* 
     * route: '/playlists'
     * returns: sorted list of all unique playlist names 
     */

    const searchTerm = req.query.search ? `%${ req.query.search }%` : '%';
    const query = client('playlists')
        .select('Name', 'PlaylistId as id')
        .where('playlists.Name','like', searchTerm) 
        .orderBy('Name','asc')
        .distinct('Name')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

playlistRouter.get('/:playlist', (req, res) => {

    const query = client('playlists')
        .join('playlist_track','playlists.PlaylistId','=','playlist_track.PlaylistId')
        .join('tracks','playlist_track.TrackId','=','tracks.TrackId')
        .select(...playlistSelectCriteria)
        .where('playlists.Name','=',playlist)
        .orderBy('playlists.Name','tracks.Name','tracks.Composer','asc');

    query.stream().pipe(JSONStream.stringify()).pipe(res);

});

module.exports = playlistRouter; 
