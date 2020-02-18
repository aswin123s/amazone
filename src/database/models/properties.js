const db = require("../connector");
const sequelize = require("sequelize")
module.exports=db.define(
    "properties",
    {
        "color":{
        type: sequelize.STRING
    },
    "weight": {
        type:sequelize.DOUBLE

    }
}
);
