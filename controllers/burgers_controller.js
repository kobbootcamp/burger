var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.showAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject)
        res.render("index", hbsObject);
    })

})

router.put("/burgers/:id", function (req, res) {
    burger.devourIt(req.params.id, function (data) {
        res.json(data);
    })
})




router.post("/burgers", function (req, res) {
    burger.createNew([req.body.name],
        function (result) {
            res.json(result)
        })
})

module.exports = router;
