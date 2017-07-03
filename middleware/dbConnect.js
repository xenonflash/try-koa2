var mongodb = require('mongodb').MongoClient();

function dbConnect(databaseName) {
  return async function (ctx, next) {
    console.log('connection database');
    var connectStr = 'mongodb://localhost:27017/' + databaseName;
    ctx.db = await new Promise((resolve, reject) => {
      mongodb.connect(connectStr, (err, db) => {
        if (err) {
          console.log('数据库连接失败');
          resolve({});
        } else {
          console.log('数据库连接成功')
          resolve(db);
        }
      })
    });
   await next();
  }
}
module.exports =  dbConnect;