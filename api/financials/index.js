const express = require('express');
const financialsRouter = express.Router({ mergeParams: true });
const invoicesRouter = require('./invoices');

financialsRouter.use('/invoices', invoicesRouter);

module.exports = financialsRouter; 
