const path = require('path');
const express = require('express');

const adminController = require('../controllers/admin');


const router = express.Router();
router.get('/ashish', (req,res)=>{
    console.log("this is called")
});

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
router.post('/edit-product', adminController.AddEditProduct);
router.get('/edit-product/:id', adminController.EditProduct);

router.get('/delete-product/:id', adminController.deleteproduct);


module.exports = router;
