var express =require("express");

var router =express.router();

var burger=require("../models/burger.js");

router.get("/", function(req,res) {
    burger.showAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    }

})
