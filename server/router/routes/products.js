// This handles retrieving the list of users

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

var db = require('../../database');
var Products = db.products;

// Route middleware
router.use(function(req, res, next) {
	console.log("Something is happening in products!!");

	next();
});

// GET route for retrieving products
router.get('/', function(req, res, next) {
	Products.find(function(err, products) {
		if (err) {
			return next(err);
		}

		res.json(products);
		console.log(products);
	});
});

// Pre-loading products
router.param('/', function(req, res, next, id) {
	var query = Products.findById(id);

	query.exec(function (err, product) {
		if (err) {
			return next(err);
		}

		if (!product) {
			return next(new Error('can\'t find product'));
		}

		req.product = product;

		return next();
	});
});

// GET route for a single product
router.get('/:id', function(req, res) {
	Products.findById(req.params.id, function(err, product) {
		if (err) {
			return next(err);
		}

		res.json(product);
		console.log(product);
	});
});

// POST route for adding a new review
router.post('/:id/:product/reviews', function(req, res, next) {
	var review = new Review(req.body);

	review.product = req.review;

	review.save(function(err, review) {
		if (err) {
			return next(err);
		}

		req.product.reviews.push(review);

		req.product.save(function(err, product) {
			if (err) {
				return next(err);
			}

			res.json(review);
		});
	});
});

// GET route for retrieving reviews for a product

module.exports = router;