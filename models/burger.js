var orm = require("./config/orm");

orm.selectAll();

orm.insertOne("burgername");

orm.UpdateOne("burgername");




module.exports = 