const path = require('path');
const customersRouter = require('koa-router')();
const client = require(path.join(__dirname, '..','..','db','client'));

customersRouter.get('/', function(ctx, next) {

    const { customerId } = ctx.params;

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';
    ctx.body = '{}';

});

customersRouter.get('/:customerId', function(ctx, next) {

    const { customerId } = ctx.params;

    ctx.response.status = 200;
    ctx.response.type = 'application/json; charset=utf-8';
    ctx.body = '{}';

});

module.exports = customersRouter; 
