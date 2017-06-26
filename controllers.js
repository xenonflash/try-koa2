var fs = require('fs');
var path = require('path');

function initRouters(router, dir) {
  var files = fs.readdirSync(__dirname + '/' + dir);
  var js_files = files.filter(f => {return f.endsWith('.js')});
  for (var f of js_files) {
    console.log(`processing controller ${f}...`);
    let mapping = require(__dirname + '/controllers/' + f);
    for (var url in mapping) {
      if (url.startsWith('GET ')) {
        var path = url.substring(4);
        router.get(path, mapping[url]);
        console.log(`register URL mapping: GET ${path}`);
      } else if (url.startsWith('POST ')) {
        var path = url.substring(5);
        router.post(path, mapping[url]);
        console.log(`register URL mapping: POST ${path}`);
      } else {
        //无效的url
        console.log('invalid url' + url)
      }
    }
  }
}

module.exports = function(dir) {
  let controller_dir = dir || 'controllers';
  let router = require('koa-router')();
  initRouters(router, controller_dir);
  return router.routes();
}