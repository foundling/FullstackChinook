const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

const client = require(path.join(__dirname,'db','client'));
const api = require(path.join(__dirname, 'api'));
const { utf8JSON, logger } = require(path.join(__dirname,'lib'));
const PORT = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname,'public','build')));
app.use('/api/docs',express.static(path.join(__dirname,'public','build','docs'))); 

app.use(cors());
app.use(utf8JSON);
app.use(logger);
app.use('/api', api);

module.exports = {
    run: function() {
        app.listen(PORT, () => { 
            console.log(`Up and running on port ${ PORT }.`); 
        }); 
    }
}
