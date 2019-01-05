var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burgername, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, { burger_name: burgername}, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    UpdateOne: function (burgerid, cb) {
        var queryString =
            "UPDATE burgers SET devoured = true WHERE ?";

        connection.query(queryString,{id: burgerid}, function (err, result) {
                if (err) throw err;
                // console.log(result);
                cb(result);
            }
        );
    }
};

module.exports = orm;