const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

var mid_processTime = require('./middleware/logTime');
var mid_logRequest = require('./middleware/logRequest');


app.use(mid_logRequest);
app.use(bodyParser());
// add url-route:
router.get('/hello/:name', async (ctx, next) => {
  var name = ctx.params.name;
  ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/login', async (ctx, next) => {
  ctx.response.type = 'text/html';
  var html = fs.readFileSync('./template/index.html');
  ctx.response.body = html;
});

router.get('/', async (ctx, next) => {
  ctx.response.body = `
    <h1>hello this is index page</h1>
    <a href='/login'>login<a/>
  `;
});

router.post('/signin', async (ctx, next) => {
  ctx.response.type = 'text/html';
  var name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
      console.log(`username: ${name}, password: ${password}`);
  if (name === 'xiaoming' && password === '123456') {
    ctx.response.body = `welcome ${name}`;
  } else {
    ctx.response.body = `<p><a href='/'>try again</a></p>`;
  }
});
// add router middleware:
app.use(router.routes());
app.use(mid_processTime);



app.listen(3000);
console.log('server started at 3000...');