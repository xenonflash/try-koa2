var fs = require('fs');
var fn_getUsers = async (ctx, next) => {
  // ctx.response.body = "getting data";
  var users = await new Promise((resolve) => {
    ctx.db
    .collection('users')
    .find()
    .toArray((err, result) => {
      if(err) {
        ctx.response.body =  "获取用户失败";
        resolve({});
      } else {
        resolve(result);
      }
    });
  });
  ctx.response.body = JSON.stringify(users);
}

module.exports = {
  'GET /users': fn_getUsers,
}