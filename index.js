const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

var mid_processTime = require('./middleware/logTime');
var mid_logRequest = require('./middleware/logRequest');
var mid_controller = require('./controllers');

app.use(mid_logRequest);
app.use(bodyParser());
// add router middleware:
app.use(mid_controller());
app.use(mid_processTime);
app.listen(3000);
console.log('server started at 3000...');