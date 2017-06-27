var products = [
  {
    id: 'kl123',
    name: '台灯',
    price: 20
  },
  {
    id: 'kl546',
    name: '电扇',
    price: 90
  },
  {
    id: 'kl125',
    name: '桌子',
    price: 34
  },
  {
    id: 'lo359',
    name: '饼干',
    price: 90
  },
  {
    id: 'kl002',
    name: '港币',
    price: 12
  }
];


var fn_getProducts = async function(ctx, next) {
  ctx.response.type = 'application/json';
  ctx.response.body = products;
}

module.exports = {
  'GET /api/products': fn_getProducts,
}