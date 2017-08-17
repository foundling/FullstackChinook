const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 
const client = require(path.join(__dirname,'..','db','client'));
const routes = require(path.join(__dirname,'routes'));

app.get('/', function(req, res) {
    // serve the spa
    res.send('Hi!');
}); 

app.use('/albums', routes.albums);

app.listen(PORT, () => {
    console.log(`Up and running on port ${ PORT }.`); 
}); 


