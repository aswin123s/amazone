const products=require("./products")
const properties = require("./properties")
const category=require("./category")
const manufacture= require("./manufacture")
const db =require("../connector")

products.hasOne(properties);
//products.hasOne(properties);
products.belongsTo(category)

products.belongsToMany(manufacture, {
    through:"products_manufacture",
    foreignKey:"ID",
    otherkey:"Manufacture_id",
    timestamp:false

})
manufacture.belongsToMany(products,{
    through:"products_manufacture",
    foreignKey:"manufacture_id",
    otherkey:"product_id",
    tiemstamp:false
})
db.sync()