const api = require('koa-router')();
const productsRouter = require('./products');
const financialsRouter = require('./financials');
const usersRouter = require('./users');

api.use('/api', productsRouter.routes());
api.use('/api', productsRouter.allowedMethods());

api.use('/api', financialsRouter.routes());
api.use('/api', financialsRouter.allowedMethods());

api.use('/api', usersRouter.routes());
api.use('/api', usersRouter.allowedMethods());

module.exports = api; 
