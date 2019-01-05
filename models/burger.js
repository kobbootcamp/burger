var orm = require("../config/orm");

var burger = {
    showAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res)
        })
    },
    createNew: function (burgerName, cb) {
        orm.insertOne(burgerName, function (res) {
            cb(res)
        })
    },
    devourIt: function (burgerId, cb) {
        orm.UpdateOne(burgerId, function (res) {
            cb(res)
        })
    }
}



module.exports = burger