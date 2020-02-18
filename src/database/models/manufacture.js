const db = require("../connector");
const sequelize = require("sequelize")

module.exports = db.define(
    "Manufacture",
    {
        "Manufacture_name":{
        type: sequelize.STRING
    },
    "location":{ 
        type:sequelize.STRING
    }
   

    
}
);