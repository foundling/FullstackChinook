const express = require('express');
const customersRouter = express.Router({ mergeParams: true });

customersRouter.get('/', function(req, res) {
    res.status(200).send('all customers');
});

customersRouter.get('/:customerId', function(req, res) {
    const { customerId } = req.params;
    res.status(200).send(customerId);
});

module.exports = customersRouter; 
