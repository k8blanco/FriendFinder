//Dependencies
var express = require("express");
var path = require("path");
// var bodyParser = require("body-parser");

//Set up Express App, make dynamic port for Heroku deployment
var app = express();
var PORT = process.env.PORT || 8080;

//Set up Express to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json()); 
app.use(express.static(__dirname + '/app/public'));

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});