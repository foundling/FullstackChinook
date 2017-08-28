const path = require('path');
const express = require('express');

const client = require(path.join(__dirname, '..', '..','..','db','client'));
const customersRouter = express.Router();

customersRouter.get('/', (req, res) => {

    client('customers')
        .select('*')
        .orderBy('lastName')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

customersRouter.get('/:customerId', (req, res) => {

    const { customerId } = req.query;

    client('customers')
        .select('*')
        .where('CustomerId','=',customerId)
        .orderBy('lastName')
        .stream()
        .pipe(JSONStream.stringify())
        .pipe(res);

});

module.exports = customersRouter;
