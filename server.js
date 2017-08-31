const cors = require('kcors');
const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static-server');

const staticServer = serve({
    rootDir: path.join(__dirname,'public','build'),
    log: true
});

const PORT = process.env.PORT || 3000; 

const app = new Koa();
const api = require(path.join(__dirname, 'api'));

const runMsg = () => {
    console.log('up and running on Port ', PORT);
    console.log(api.stack.map(i => i.path).join('\n'));
};

const run = () => app.listen(PORT, runMsg)

// middleware
app.use(cors());

// routes
app.use(api.routes());
app.use(api.allowedMethods());
app.use(staticServer);

module.exports = { run };
