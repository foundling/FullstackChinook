const knex = require('knex');
const path = require('path');

if (!process.env.DATABASE) {
    console.log('There is no database value in the node environment. Did you source your env.txt file?'); 
    process.exit(1);
}

const client = knex({
    dialect: 'sqlite3',
    debug: true,
    connection: {
        filename: path.join(__dirname, process.env.DATABASE)
    },
    useNullAsDefault: true
});

module.exports = client;
