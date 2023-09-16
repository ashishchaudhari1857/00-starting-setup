const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err || fileContent.length ===0) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price ,id) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.id=id;

  }

   
  save() {

      getProductsFromFile(products => {
            if(this.id){
              const index =   products.findIndex((item)=>item.id===this.id)
              const updatedproduct=[...products]
              updatedproduct[index]=this;
              fs.writeFile(p,JSON.stringify(updatedproduct) ,(err)=>{
                     console.log(err)
              })
            }else{
              this.id= String(Math.random())
              products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    }
  })
  }

  static  deleteitem(id){
    getProductsFromFile((product)=>{
      const item=product.filter((item)=>id!==item.id);
      fs.writeFile(p, JSON.stringify(item),(err)=>{
        console.log(err)
      })
   }); 

  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static fetchitembyid(id , cb){
    getProductsFromFile((product)=>{
      const item=product.filter((item)=>id===item.id);
       console.log(product)
       return cb(item)
    }); 
    
  }
 
};
