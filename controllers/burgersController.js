// placeholder for controller code

const Burger = require("../models/burger");
const express = require("express");
const path = require("path");


var routes = express.Router();

const model = new Burger();

routes.get('/', function(request, response) {
    let obj = {imageSource: path.join('assets','images','burger.png')};
    //let obj = {imageSource: './public/assets/images/burger.png'};
    response.render("index", obj); //TBD
});

module.exports = routes;
