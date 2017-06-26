var fs = require('fs');

var fn_index = async (ctx,next) => {
  ctx.response.body = `
    <h1>welcome</h1>
    <a href='/login'>login</a>
  `;
}

module.exports = {
  'GET /': fn_index,
}