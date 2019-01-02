var orm = require("../config/orm");

var burger = {
    showAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res)
        })
    },
    createNew: function (burgerName, cb) {
        orm.insertOn(burgerName, function (res) {
            cb(res)
        })
    },
    devourIt: function (burgerName, cb) {
        orm.UpdateOne(burgername, function (res) {
            cb(res)
        })
    }
}



module.exports = burger