const express = require('express');
const path = require('path');
const client = require(path.join(__dirname, '..','..','db','client'));
const albumsRouter = express.Router();
const JSONStream = require('JSONStream');

albumsRouter.get('/', function(req, res) {

    const searchTerm = req.query.search ? `%${ req.query.search }%` : '%';
    const albums = client('albums')
        .select('Title','AlbumId as id') 
        .where('Title','like', searchTerm)
        .orderBy('Title','asc')
        .distinct('Title')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

albumsRouter.get('/:title', function(req, res) {

    const albumTitle = req.params.title;
    const albums = client('albums')
        .select('Title','AlbumTitle as id')
        .where('Title','like',`%${ albumTitle }%`)
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

module.exports = albumsRouter;
