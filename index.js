const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const nunjucks = require('nunkucks');
var mid_processTime = require('./middleware/logTime');
var mid_logRequest = require('./middleware/logRequest');
var mid_controller = require('./controllers');


// *******************init nunjucks *******************
function createEnv(path, opts) {
  var
    autoescape = opts.autoescape && true,
    noCache = opts.noCache || false,
    watch = opts.watch || false,
    throwOnUndefined = opts.throwOnUndefined || false,
    env = new nunjucks.Environment(
      new nunjucks.FileSystemLoader(path, {
        noCache: noCache,
        watch: watch,
      }), {
        autoescape: autoescape,
        throwOnUndefined: throwOnUndefined
      });
  if (opts.filters) {
    for (var f in opts.filters) {
      env.addFilter(f, opts.filters[f]);
    }
  }
  return env;
}

var env = createEnv('templates', {
  watch: true,
  filters: {
    hex: function () {
      return '0x' + n.toString(16);
    }
  }
});

/**************************************************** */


app.use(mid_logRequest);
app.use(bodyParser());
// add router middleware:
app.use(mid_controller());
app.use(mid_processTime);
app.listen(3000);
console.log('server started at 3000...');