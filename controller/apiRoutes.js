var express = require("express");
var exphbs = require("express-handlebars");
//Putting express functions into app
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var db = require("../models");

module.exports = function(app) {
    // get all pets
    app.get("/api/pets", function(req, res) {
        db.Pets.findAll({}).then(function(response) {
            res.json(response);
        });
    });
    // get all humans
    app.get("/api/humans", function(req, res) {
        db.Humans.findAll({}).then(function(response) {
            res.json(response);
        });
    });
    // create new pet record
    app.post("/api/pets", function(req, res) {
        console.log('addng a pet');
        db.Pets.create(req.body).then(function(response) {
            //logic for matches
            
            res.render("partials/results-humans" 
            // object of matches to pass to handlebars
            )
        });
    });
    // create new human record
    app.post("/api/humans", function(req, res) {
        console.log('req.body', req.body);
        db.Humans.create(req.body).then(function(response) {
            //logic for matches
            
            res.render("partials/results-pets"
            // object of matches to pass to handlebars
            )
        });
    });
    // delete pets by id
    app.delete("/api/pets/:id", function(req, res) {
        db.Pets.destroy({ where: { id: req.params.id } }).then(function(response) {
            res.json(response);
        });
    });
    // delete humans by id
    app.delete("/api/humans/:id", function(req, res) {
        db.Humans.destroy({ where: { id: req.params.id } }).then(function(response) {
            res.json(response);
        });
    });
};