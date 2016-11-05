/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();

// only one dependency: our models folder. index.js handles the rest
var burger = require('../models')['burgers'];

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.findAll().then(function (data) {
			var hbsObject = { burgers: data }
			console.log(hbsObject);
			res.render('index', hbsObject);
		});
});

router.post('/burgers/insertOne', function (req, res) {
	
	burger.create({ burger_name: req.body.burger_name }, { devoured: req.body.devoured })
		.then(function(data) {
			res.redirect('/burgers');
		});
});

router.put('/burgers/updateOne/:id', function (req, res) {
	burger.update(
		{ devoured: req.body.devoured }, {
			fields: ['devoured'],
			where: {id: req.params.id}
		})
		.then(function(data){
			res.redirect('/burgers');
		});
});

module.exports = router;