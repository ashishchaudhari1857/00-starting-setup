 const path =require('path')
 const fs=require('fs')
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports= class Cart {
     static addtocart(id ,price){
     let cart={product:[],totolprice:0}
         fs.readFile(p ,(err ,content)=>{
          if(!err && content.length!==0){
            cart=JSON.parse(content);
          }
          const exist= cart.product.findIndex((item)=>item.id===id);
          const existitem=cart.product[exist];
          let updateitem;
            if(existitem){
              updateitem={...existitem};
              updateitem.qty=updateitem.qty+1;
             cart.product[exist]=updateitem;

            }else{
              updateitem={id:id , qty:1 ,price:price}
               cart.product=[...cart.product, updateitem]
            }
      cart.totolprice=cart.totolprice+price;
      fs.writeFile(p,JSON.stringify(cart) ,(err)=>{
        console.log(err)
      })
         })
     }

}