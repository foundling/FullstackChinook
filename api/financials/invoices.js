const path = require('path');
const invoicesRouter = require('koa-router')();
const client = require(path.join(__dirname, '..','..','db','client'));

invoicesRouter.get('/', function(ctx, next) {
    ctx.response.status = 200;
    ctx.response.type = 'application/json;charset=utf-8';
    ctx.body = '{}';
});

invoicesRouter.get('/:invoiceId', function(ctx, next) {
    ctx.response.status = 200;
    ctx.response.type = 'application/json;charset=utf-8';
    ctx.body = '{}';
});

module.exports = invoicesRouter; 
