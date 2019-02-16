const express = require("express");
const router = express.Router();
const burger = require("../models/burger");
//render interface
router.get("/", function(req,res){
    res.render("index");
    
});
//get all burgers
router.get("/api/burgers", function(req,res){
    burger.all(function(data){
        res.json(data);
    });
});
//create a new burger
router.post("/api/burgers", function(req,res){
    var newBurger = req.body.burger;
    console.log(newBurger);
    burger.cook(newBurger);
});
//devour a burger
router.post("/api/devour", function(req,res){
    var devour = req.body;
    
    burger.devour(devour.id);
});

module.exports = router;