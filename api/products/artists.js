const express = require('express');
const artistsRouter = express.Router({ mergeParams: true });
const JSONStream = require('JSONStream');
const path = require('path');
const client = require(path.join(__dirname,'..','..','db','client'));

artistsRouter.get('/', function(req, res) {

    const searchTerm = req.query.search ? `%${ req.query.search }%` : '%';
    const artists = client('artists')
        .select('Name','ArtistId as id')
        .distinct('Name')
        .where('Name','like', searchTerm)
        .orderBy('Name','asc')
        .stream() 
        .pipe(JSONStream.stringify())
        .pipe(res);

});

artistsRouter.get('/:artistName', function(req, res) {

    const { artistName } = req.params;
    const filterPredicate = artistName ? `%${artistName}%` : '%'; 
    const artists = client('artists')
        .select('Name','ArtistId as id')
        .where('Name','like',filterPredicate)
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

module.exports = artistsRouter; 
