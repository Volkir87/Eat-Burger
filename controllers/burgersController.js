// placeholder for controller code

const Burger = require("../models/burger");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));
app.engine("handlebars", exphbs({ defaultLayout: "main" })); //selects a specific engine of an app
app.set("view engine", "handlebars");

const model = new Burger();





app.get('/', function(request, response) {
    response.render("index", obj); //TBD
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
