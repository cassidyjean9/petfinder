//Requires
var express = require("express");
var path = require("path");
var nodemon=require("nodemon");
//Instantiate app with express function and methods
var app = express();

//Local host port or Heroku
PORT = process.env.PORT || 5500;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
//Putting in handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Application Routes for separation of work being put into a variable
htmlRoutes = require(path.join(__dirname, 'controller/htmlRoutes'));
apiRoutes = require(path.join(__dirname, 'controller/apiRoutes'));

// Shorthand to pass to the server the Routes. Will enable this once we have the pages
htmlRoutes(app);
apiRoutes(app);

var db = require("./models");

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});