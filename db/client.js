const knex = require('knex');
const path = require('path');

if (!process.env.DATABASE) {
    console.log('There is no database value in the node environment. Did you source your env.txt file?'); 
}

const client = knex({
    dialect: 'sqlite3',
    connection: {
        filename: path.join(__dirname, process.env.DATABASE)
    }
});

module.exports = client;
