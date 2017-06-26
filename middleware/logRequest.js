module.exports = async (ctx, next) => {
  await next();
  console.log(ctx.request.method, ctx.request.url);
}