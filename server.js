//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App, make dynamic port for Heroku deployment
var app = express();
var PORT = process.env.PORT || 8080;

//Set up Express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //do we need json with this?? 

//Router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});