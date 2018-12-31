var conn = require("./connection");

var orm = {
    selectAll: function () {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (burgername) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, { burger_name: burgername, devoured: false }, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    UpdateOne: function (burgername) {
        var queryString =
            "UPDATE burgers SET devoured = true WHERE burger_name = ?";

        connection.query(queryString,{ burger_name: burgername}, function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;