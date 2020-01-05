// Controller code

const Burger = require("../models/burger");
const express = require("express");
const path = require("path");


var routes = express.Router();

const burgerModel = new Burger();

routes.get('/', async function(request, response) {
    let allBurgers = await burgerModel.getAllBurgers();
    let allDevoured = await burgerModel.getAllDevoured();
    let obj = {imageSource: path.join('assets','images','burger.png'), 
                burgers: allBurgers,
                devoured: allDevoured};
    response.render("index", obj); //TBD
});

routes.post('/api/post', function(request, response) {
    let body = request.body;
    burgerModel.addBurger(body.name);
});

routes.put('/api/devour', function(request, response) {
    let body = request.body;
    burgerModel.devourBurger(body.id);
    response.send("200"); //to avoid error 500
});

module.exports = routes;
