const express = require('express');
const invoicesRouter = express.Router({ mergeParams: true });

invoicesRouter.get('/', function(req, res) {
    res.status(200).send('invoices');
});

invoicesRouter.get('/:invoiceId', function(req, res) {
    const { invoiceId } = req.params;
    res.status(200).send(invoiceId);
});

module.exports = invoicesRouter; 
