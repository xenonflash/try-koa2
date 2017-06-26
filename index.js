const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
var mid_processTime = require('./middleware/logTime');
var mid_logRequest = require('./middleware/logRequest');

 app.use(mid_logRequest);
// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});

// add router middleware:
app.use(router.routes());
app.use(mid_processTime);



 app.listen(3000);
 console.log('server started at 3000...');