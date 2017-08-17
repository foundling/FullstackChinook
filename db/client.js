const knex = require('knex');
const path = require('path');

console.log(process.env.DATABASE);
const client = knex({
    dialect: 'sqlite3',
    connection: {
        filename: path.join(__dirname,process.env.DATABASE)
    }
});

module.exports = client;
