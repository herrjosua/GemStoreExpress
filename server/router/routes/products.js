// This handles retrieving of products

// Includes Express
var express = require('express');
// Initialize the router
var router = express.Router();

var moment = require('moment');
var _ = require('underscore');
var color = require('cli-color');

var mongoose = require('mongoose');
var Product = mongoose.model('Product');
var Review = mongoose.model('Review');

// Route middleware
router.use(function(req, res, next) {
	console.log("Something is happening in products!!");
	next();
});

// GET route for all Products
router.get('/', function (req, res, next) {
	Product.find( function (err, products) {
		if (err) {
			return next(err);
		}

		res.json(products);
	});
});

// POST route for adding a Product
router.post('/', function (req, res, next) {
	var product = new Product (req.body);

	product.save( function (err, post) {
		if(err) {
			return next(err);
		}

		res.json(product);
	});
});

// Pre-loading product object
router.param('product', function (req, res, next, id) {
	var query = Product.findById(id);

	query.exec( function (err, product) {
		if (err) {
			return next(err);
		}

		if(!product) {
			return next(new Error('can\'t find product'));
		}

		req.product = product;

		return next();
	})
});

// GET route for retrieving a single product
router.get('/:product', function (req, res) {
	req.product.populate('reviews', function (err, product) {
		if (err) {
			return next(err);
		}

		res.json(req.product);
	});
});

// POST route for creating a review
router.post('/:product:reviews', function (req, res, next) {
	var review = new Review(req.body);

	review.product = req.product;

	review.save( function (err, review){
		if (err) {
			return next(err);
		}

		req.product.reviews.push(review);
		req.product.save( function (err, review) {
			if (err) {
				return next(err);
			}

			res.json(review);
		});
	});
});


// NOTE: Below code uses the Products variable which connects to the db.products

//var db = require('../../database');
//var Products = db.products;

// // GET route for retrieving products
// router.get('/', function (req, res, next) {
// 	Products.find(function(err, products) {
// 		if (err) {
// 			return next(err);
// 		}

// 		res.json(products);
// 		console.log(products);
// 	});
// });

// // POST route for adding a new product
// router.post('/', function (req, res, next) {
// 	var product = new Products(req.body);

// 	product.save(function(err, product) {
// 		if(err) {
// 			return next(err);
// 		}

// 		res.json(product);
// 	});
// });

// //GET route for a single product
// router.get('/:id', function (req, res) {
// 	Products.findById(req.params.id, function(err, product) {
// 		if (err) {
// 			return next(err);
// 		}

// 		res.json(product);
// 		console.log(product);
// 	});
// });

module.exports = router;