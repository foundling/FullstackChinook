const cors = require('kcors');
const path = require('path');
const mount = require('koa-mount');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static');
const PORT = process.env.PORT || 3000; 

const app = new Koa();
const api = require(path.join(__dirname, 'api'));
const etc = KoaRouter();

app.use(async (ctx, next) => {
    if (ctx.request.url === '/routes')
        ctx.body = api.stack.map(layer => layer.path).join('\n');
    await next();
});

const run = () => app.listen(PORT, () => {
    console.log('Up and running on port:', PORT);
});

// use middleware
app.use(cors());

// api routes
app.use(api.routes());
app.use(api.allowedMethods());

// static routes
app.use(mount('/', serve('public/build')));

// entry point
module.exports = { run };
