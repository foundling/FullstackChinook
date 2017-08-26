const express = require('express');
const path = require('path');
const client = require(path.join(__dirname, '..','..','db','client'));
const artistsRouter = express.Router();
const JSONStream = require('JSONStream');

artistsRouter.get('/', function(req, res) {

    const artists = client('artists')
        .select('Name')
        .stream(); 

    artists.pipe(JSONStream.stringify()).pipe(res);

});

artistsRouter.get('/:name', function(req, res) {

    const artistName = req.params.name;
    const artists = client('artists')
                        .where('Name','like',`%${ artistName }%`)
                        .stream();

    artists.pipe(JSONStream.stringify()).pipe(res);

});

module.exports = artistsRouter;
