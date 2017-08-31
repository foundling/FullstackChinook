const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static-server');
const cors = require('kcors');
const path = require('path');

const PORT = process.env.PORT || 3000; 
const PUBLIC_DIR = path.join(__dirname,'public','build');
const DOCS_DIR = path.join(__dirname,'public','build','docs');

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
//app.use(serve({ rootDir: 'static', rootPath:  })
//app.use(server(path.join(__dirname, DOCS_DIR)))
app.use(api.routes());
app.use(api.allowedMethods());

module.exports = { run };
