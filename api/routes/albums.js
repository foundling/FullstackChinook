const express = require('express');
const path = require('path');
const client = require(path.join(__dirname, '..','..','db','client'));
const albumsRouter = express.Router();

albumsRouter.get('/', function(req, res) {

    const albums = client('albums').select('Title'); 

    albums.then(data => {
        res.json({ data });
    }, err => {
        res.json({error: err.code});
    });

});

albumsRouter.get('/:name', function(req, res) {

    const albums = client('albums').where({
        Title: req.params.name
    });

    albums.then(data => {
        res.json({ data });
    }, err => {
        res.json({error: err.code});
    });

});

module.exports = albumsRouter;
