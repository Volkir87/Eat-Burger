// placeholder for controller code

const Burger = require("../models/burger");
const express = require("express");
const path = require("path");


var routes = express.Router();

const burgerModel = new Burger();

routes.get('/', async function(request, response) {
    let allBurgers = await burgerModel.getAllBurgers();
    let obj = {imageSource: path.join('assets','images','burger.png'), 
                burgers: allBurgers};
                console.log(obj);
    //let obj = {imageSource: './public/assets/images/burger.png'};
    response.render("index", obj); //TBD
});

routes.post('/api/post', function(request, response) {
    let body = request.body;
    //let obj = {imageSource: './public/assets/images/burger.png'};
    //console.log(body)
    burgerModel.addBurger(body.name);
});

module.exports = routes;
