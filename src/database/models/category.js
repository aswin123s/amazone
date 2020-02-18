const db = require("../connector");
const sequelize = require("sequelize")

module.exports = db.define(
    "category",
    {
        "name":{
        type: sequelize.STRING
    },
   

    
}
);