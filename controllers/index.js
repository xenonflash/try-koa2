var fs = require('fs');
var fn_index = async (ctx,next) => {
  ctx.render('index.html', {name: 'xiaoming'});
}

module.exports = {
  'GET /': fn_index,
}