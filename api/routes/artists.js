const express = require('express');
const path = require('path');
const client = require(path.join(__dirname, '..','..','db','client'));
const artistsRouter = express.Router();

artistsRouter.get('/', function(req, res) {

    const artists = client('artists').select('Name'); 

    artists.then(data => {
        res.json({ data });
    }, err => {
        res.json({error: err.code});
    });

});

artistsRouter.get('/:name', function(req, res) {

    const artistName = req.params.name;
    const artists = client('artists').where('Name','like',`%${ artistName }%`);

    artists.then(data => {
        res.json({ data });
    }, err => {
        res.json({error: err.code});
    });

});

module.exports = artistsRouter;
