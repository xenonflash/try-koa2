 const Koa = require('koa');
 const app = new Koa();
var mid_processTime = require('./middleware/logTime');
var mid_logRequest = require('./middleware/logRequest');

 app.use(mid_logRequest);
 app.use(mid_processTime);
 app.use(async (ctx, next) => {
   await next();
   ctx.response.type = "text/html";
   ctx.response.body = '<h1>hello koa</h1>';
 });
 app.listen(3000);
 console.log('server started at 3000...');