const Product = require('../models/product');

exports.EditProduct=(req,res,next)=>{
  const id=req.params.id;
Product.fetchitembyid(id ,(item)=>{
  res.render('admin/edit-product', {
    prods: item,
    pageTitle: 'edit Product',
    path: '/admin/edit-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
})
   
}


exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(  title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};
exports.AddEditProduct = (req, res, next) => {
  const id=req.body.id;
  console.log("this is sediftinf  " ,  id)
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product( title, imageUrl, description, price ,id);
  product.save();
  res.redirect('/');
};




exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};

exports.deleteproduct=(req ,res ,next)=>{
   Product.deleteitem(req.params.id);
   res.redirect('/')
}