var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers WHERE devoured = false";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burgername, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, { burger_name: burgername, devoured: false }, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    UpdateOne: function (burgername, cb) {
        var queryString =
            "UPDATE burgers SET devoured = true WHERE burger_name = ?";

        connection.query(queryString,{ burger_name: burgername}, function (err, result) {
                if (err) throw err;
                console.log(result);
                cb(result);
            }
        );
    }
};

module.exports = orm;