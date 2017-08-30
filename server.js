const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const client = require(path.join(__dirname,'db','client'));
const api = require(path.join(__dirname, 'api'));
const { utf8JSON, logger } = require(path.join(__dirname,'lib'));
const PORT = process.env.PORT || 3000; 
const publicDir = path.join(__dirname,'public','build');
const docsDir = path.join(__dirname,'public','build','docs');

const startMSg = () => console.log('up and running on Port ', PORT)

// middleware
app.use(cors());
app.use(utf8JSON);
app.use(logger);

// routes
app.use(express.static(publicDir)); // use nginx instead
app.use('/api/docs',express.static(docsDir)); // use nginx instead 
app.use('/api', api);

module.exports = {
    run: function() {
        app.listen(PORT, () => { 
            console.log(`Up and running on port ${ PORT }.`); 
        }); 
    }
}
