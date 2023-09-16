const Product = require('../models/product');
const Cart=require('../models/cart')

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {

    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};
exports.getid = (req, res, next) => {
   const id=req.params.id;
   Product.fetchitembyid(id ,(item)=>{
    const it=JSON.stringify(item);
    // res.send(item)
 res.render('../views/shop/product-detail.ejs' ,{item:item})
   })
    // res.render('')

};
exports.addtocart=(req,res,next)=>{
  const id=req.params.id;
  Product.fetchitembyid(id ,(item)=>{
     Cart.addtocart(id , item[0].price)
   })

   res.redirect('/')

}
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
