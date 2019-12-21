
const Burger = require("./models/burger");
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgersController");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" })); //selects a specific engine of an app
app.set("view engine", "handlebars");

const model = new Burger();


app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
