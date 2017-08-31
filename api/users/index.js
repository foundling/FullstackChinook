const usersRouter = require('koa-router')();
const customersRouter = require('./customers');

usersRouter.use('/users/customers', customersRouter.routes());
usersRouter.use('/users/customers', customersRouter.allowedMethods());

module.exports = usersRouter; 
