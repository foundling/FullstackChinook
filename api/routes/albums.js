const express = require('express');
const path = require('path');
const client = require(path.join(__dirname, '..','..','db','client'));
const albumsRouter = express.Router();
const JSONStream = require('JSONStream');

albumsRouter.get('/', function(req, res) {

    const albums = client('albums')
        .select('Title') 
        .stream();

    albums.pipe(JSONStream.stringify()).pipe(res);

});

albumsRouter.get('/:title', function(req, res) {

    const albumTitle = req.params.title;
    const albums = client('albums')
        .where('Title','like',`%${ albumTitle }%`)
        .stream();

    albums.pipe(JSONStream.stringify()).pipe(res);

});

module.exports = albumsRouter;
