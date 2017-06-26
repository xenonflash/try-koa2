var fs = require('fs');

var fn_login = async (ctx, next) => {
  ctx.response.type = 'text/html';
  var html = fs.readFileSync('./template/login.html');
  ctx.response.body = html;
}
var fn_handleLogin = async (ctx, next) => {
  ctx.response.type = 'text/html';
  var name = ctx.request.body.name || '',
    password = ctx.request.body.password || '';
    console.log(name, password);
  if (name === 'xiaoming' && password === '123456') {
    ctx.response.body = `welcome ${name}`;
  } else {
    ctx.response.body = `<p><a href='/'>try again</a></p>`;
  }
}

module.exports = {
  'GET /login': fn_login,
  'POST /signin': fn_handleLogin
}