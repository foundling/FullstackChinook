const cors = require('kcors');
const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static-server');
const PORT = process.env.PORT || 3000; 

const app = new Koa();
const api = require(path.join(__dirname, 'api'));
const etc = KoaRouter();

/*
app.use(async (ctx, next) => {
    if (ctx.request.url === '/routes')
        console.log(api.stack.map(layer => layer.path).join('\n'));
    next();
});
*/

const run = () => app.listen(PORT, () => {
    console.log('Up and running on port:', PORT);
});

/*
const staticServer = serve({
    rootDir: path.join(__dirname,'public','build'),
    log: true
});
*/

// use middleware
app.use(cors());

// static routes
// app.use(staticServer);

// api routes
app.use(api.routes());
app.use(api.allowedMethods());

// entry point
module.exports = { run };
