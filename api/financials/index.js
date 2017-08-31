const financialsRouter = require('koa-router')();
const invoicesRouter = require('./invoices');

financialsRouter.use('/financials/invoices', invoicesRouter.routes());
financialsRouter.use('/financials/invoices', invoicesRouter.allowedMethods());

module.exports = financialsRouter; 
