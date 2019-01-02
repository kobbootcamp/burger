var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.showAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    })

})


// router.post("/burgers", function (req, res) {
//     burger.CreateNew(req.body.burger, function (data) 
// })
module.exports = router;
