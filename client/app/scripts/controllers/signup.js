'use strict';

/**
 * @ngdoc function
 * @name gemStoreApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the gemStoreApp
 */
angular.module('gemStoreApp').controller('SignupCtrl', function ($scope, $http) {
	// Here we're creating some local references
	// so that we don't have to type $scope every
	// damn time
	var user;
	var signup;

	// Here we're creating a scope for our Signup page.
	// This will hold our data and methods for this page.
	$scope.signup = signup = {};

	// In our signup.html, we'll be using the ng-model
	// attribute to populate this object.
	signup.user = user = {};

	// This is our method that will post to our server.
	signup.submit = function () {


		console.log("First name: " + user.firstName);
		console.log("Last name: " + user.lastName);
		console.log("Email: " + user.email);
		console.log("Password: " + user.pwd);
		console.log("Confirm Password: " + user.confirmPwd);

		// console.log(signup.user.firstName);

		// make sure all fields are filled out...
		// aren't you glad you're not typing out
		// $scope.signup.user.firstname everytime now??
		if (!user.firstName || !user.lastName || !user.email || !user.pwd || !user.confirmPwd) {
			alert('Please fill out all form fields.');
			return false;
		}

		// make sure the passwords match match
		if (user.pwd !== user.confirmPwd) {
			alert('Your passwords must match.');
			return false;
		}

		// Just so we can confirm that the bindings are working
		console.log(user);

		// Make the request to the server ... which doesn't exist just yet
		var request = $http.post('/signup', user);

		// we'll come back to here and fill in more when ready
		request.success(function (data) {
			// to be filled in on success
			console.log(data.msg);
		});

		request.error(function (data) {
			// to be filled in on error
			console.log(data.msg);
		});

	};
});
