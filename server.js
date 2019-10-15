// Dependencies
//Series of npm packages
// var path = require("path");
var express = require("express");
var bodyParser = require ("body-parser");
//Seed data for "database"
// var friends = require('./app/data/friends.js');
var app = express();
var PORT = process.env.PORT || 8080; //Sets an initial port.
//Makes static assets in the public folder available (style.css)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
//Routes
require('./routing/apiRoutes.js')(app);
require('./routing/htmlRoutes.js')(app);
//Start the server to begin listening
//alternative code
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




