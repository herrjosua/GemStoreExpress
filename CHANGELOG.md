
# GemStoreExpress
* Git repository: [GemStoreExpress](https://github.com/herrjosua/GemStoreExpress.git)
* Author: Joshua Bock
* Email: Josh@JoshuaBock.com
* URL: [Portfolio Website](joshuabock.com)
* Description:  AngularJS Project based off the following projects
    * [Shaping up with AngularJS](https://www.codeschool.com/courses/shaping-up-with-angular-js/ "Shaping up with AngularJS")
    * [Yeoman](http://yeoman.io/codelab.html/ "Yeoman Tutorial")
    * [Building an Angular & Express App &mdash; Part 1](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/ "Building an Eangular & Express App &mdash; Part 1")
    * [Building an Angular & Express App &mdash; Part 2](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/ "Building an Eangular & Express App &mdash; Part 2")
    * [Building an Angular & Express App &mdash; Part 3](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-3/ "Building an Eangular & Express App &mdash; Part 3")
    * [Mean-Stack Tutorial &mdash; Adding Authentication via Passport](https://thinkster.io/mean-stack-tutorial/ "Mean-Stack Tutorial &mdash; Adding Authentication via Passport")


## Change Log

### 07/13/2015

* **Added** [ncuillery angular-breadcrumb](http://github.com/ncuillery/angular-breadcrumb/) "Angular-Breadcrumb" to `client/bower.json` dependencies
* **Modified** adjusted template for `ncuillery angular-breadcrumb` by creating a custom directive template in my `directives` directory
* **Modified/Added** a config in `client/app/scripts/app.js` for `ncuillery angular-breadcrumb` to correctly name the breadcrumb labels based on state name &mdash; Product details labels is the product name
* **Added** `jsonwebtoken`, `passport`, `passport-local`, and `express-jwt` to `server/package.json` dependencies for Authenthication
* **Added** `source` directory to the root of the project with sample JSON data, and mongo shell help text
* **Added** `product-gallery`, `product-stars`, and product description templates
* **Modified** `controllers`, and `directives` directory structure by adding a subfolders for each component $mdash; for example added a `main` directory for the `main.js` controller, and likewise added a `breadcrumbs` directory for the `breadcrumbs.html` template.
* **Modified** added `-controller` suffix to all controllers, and added `directive` suffix for all directives
* **Modified** LESS styles for newly added templates
* **Added** added images from original GemStore project in the `client/images` directory.
* **Modified** Formatting `READMD.md` and `CHANGELOG.md`

### 07/14/2015

* **Added** ~~POST route for adding a product in `server/router/routes/products.js`~~
* **Modified** Commented old routes in `server/router/routes/products.js`
* **Added** Imports for `mongoose` and `Product` schema in `server/router/routes/products.js`
* **Modified** Rewrote routes for `products` in `server/router/routes/products.js`
* **Added** New schema for `Reviews` and linked with the `Product` schema

### 07/15/2015 07/16/2015 & 07/17/2015 - Pre 14:00 commit

* **Modified** The template for listing products so I can add buttons at the list level
* **Modified** LESS styles for `product-list` class
* **Modified** Bower dependencies in `READMD.md` for `client` directory
* **Modified/Added** Bower dependency for `angular-breadcrumb`
* **Modified** Routes for a product in `server/router/routes/products.js`
* **Modified** Renamed the `ModalCtrl` to `CreateUserModalCtrl` & `ModelInstanceCtrl` to `CreateUserModalInstanceCtrl` in `/client/app/scripts/controller/main/main-controller.js` 
* **Added** New files `CreateUserModalCtrl` & `CreateUserModalInstanceCtrl` within the `client/app/scripts/controllers/users/` directory
* **Modified** Moved the `CreateUserModalCtrl` & `CreateUserModalInstanceCtrl` controllers to the newly created files
* **Modified** The following files by adding a Immediately Invoke Function Expression (IIFE) per the [Angular Styleguide](https://www.github.com/johnpapa/angular-styleguide "Angular Styleguide") by John Papa
    * `/client/app/scripts/controllers/about/about-controller.js`})
    * `/client/app/scripts/controllers/main/main-controller.js`
    * `/client/app/scripts/controllers/navbar/navbar-controller.js`
    * `/client/app/scripts/controllers/products/product-detauls-controller.js`
    * `/client/app/scripts/controllers/products/products-controller.s`
    * `/client/app/scripts/controllers/products/products-review-controller.js`
    * `/client/app/scripts/directives/navbar/navbar-directive.js`
    * `/client/app/scripts/directives/product-gallery/product-gallery-directive.js`
    * `/client/app/scripts/directives/product-review/product-review-directive.js`
    * `/client/app/scripts/directives/product-stars/product-stars-directive.js`
    * `/client/app/scripts/services/products/products-service.js`
    * `/client/app/scripts/services/users/users-service.js`
* **Note** `/client/app/scripts/app.js` does not need a IIFE per jshint warnings: `Wrapping non-IIFE function literals in parens is unnecessary.` & `Expected an assignment or function call and instead saw an expression.`
* **Modified/Added** A `update` method to my `productsService` in `/client/app/scripts/services/products/product-service.js` & added `id: '@id'`
* **Modified** The name of `gemStoreApp.usersService` to `gemStoreApp.userService` in `/client/app/scripts/services/users/users-service.js`
* **Added** New html markup with `ng-click` attribute for `addProduct()` for an `Add Product` button to `client/app/views/products.html`
* **Added** New method in the `ProductsCtrl` in `/client/app/scripts/controllers/products/product-controller.js` for `addProduct` to add hardcoded product to the front-end and back-end. 
* **Modified/Added** The `ProductsCtrl` in `/client/app/scripts/controllers/products/product-controller.js` by removing up the Dependecy Injection by removing the `$http` and the `$state` calls, and by removing the `ProductDetailCtrl` to a new file in `/client/app/scripts/controllers/products/`
* **Modified** The remove method in the `UsersCtrl` in `/client/app/scripts/controllers/users/users-controller.js` to use the `usersService` instead of the `$http` call, and by removing the Dependecy Injection by removing the `$http` call
* **Modified** The schema for `products` by adding a `createdOn` attribute in `/server/database/schemas/products.js`
* **Modified** Comments for the products routes in `/server/router/routes/products.js`
* **Modified** Changed the order of the main nav by moving the `users` menu item as the last item
* **Modified/Added** markup for `/client/app/index.html` by adding newly created controllers
* **Modified** markup for `/client/app/views/products.html`

### 07/17/2015 - post 14:00 commit

* **Added** `modal-product-controller.js` and `modal-product-instance-controller.js` to `/client/app/scripts/controllers/products` directory
* **Copied/Modified** code from `/client/app/scripts/controllers/users/modal-signup-controller.js` and `/client/app/scripts/controllers/users/modal-signup-instance-controller.js` to `/client/app/scripts/controllers/products/modal-product-controller.js` and `/client/app/scripts/controllers/products/modal-product-instance-controller.js`
* **Modified** the add product buttom to call the product modal
* **Modified/Added** submit method for the `/client/app/scripts/controllers/products/modal-product-instance-controller.js` to add a new custom product to the server

### 07/18/2015

* **Modified** `/client/app/scripts/controllers/products/modal-product-controller.js` to inset the new product to the front-end after the add product modal is closed
* **Modified** `/client/app/scripts/controllers/products/modal-product-instance-controller.js` by removing unnecessary/commented code
* **Modified** Removed the HTML markup used to add the hardcoded product in `/client/app/views/products.html`
* **Modified** Removed the addProduct method from the `ProductsCtrl` in `/client/app/scripts/controllers/products/products-controller.js`
* **Modified** `/server/router/routes/products.js` by adding a method to check if a product already exists by comparing the product name to the product names in the database. This code is commented out, still working on resolving an issue where if an error occurs, I am unable to submit the form with corrected data.

### 07/19/2015

* **Modified** README.md with instructions on how to build project, and updated the server README.md with updated instructions for a Windows user.

### 07/20/2015

* **Modified** `/client/app/scripts/controllers/products/product-details-controllerjs` by updating the comment to reflect the controller's name
* **Modified** `/client/app/scripts.conntrollers/products/modal-product-instance-controller.js` the save method call to post to the correct url
* **Modified** `/server/router/routes/products.js` by adding variables that access the database, the Products.findOut method
* **Modified** `/server/router/routes/users.js` by restoring the title comment
* **Modified** `/source/products.json` by removing the image and reviews arrays
* **Added**  `/client/app/scripts/controllers/products/products-pagination-controller.js`, `/client/app/scripts/directives/product-pagination/product-pagination-directive.js`, `/client/app/scripts/directives/product-pagination/pagination-count.html`,`/client/app/scripts/directives/search/search-directive.js`,`/client/app/scripts/directives/search/search.html`
* **Modified** Removed comments from `/server/router/routes/products.js` and `/server/router/routes/users.js`

### 07/20/2015 to 07/23/2015 @ 1420
* **Modified** `README.MD` by adding `Current Issues/Road Blocks`
* **Updated** the version of `angularjs` from `1.3.16` to `1.4.3`
* **Updated** the version of `angular-resource` from `1.3.16` to `1.4.3`
* **Updated** the version of `angular-route` from `1.3.16` to `1.4.3` **NOTE** need to remove this as I am using `angular-ui-router`
* **Updated** the version of `angular-mocks` from `1.3.16` to `1.4.3`
* **Added** restangular to `/client/bower.json`
* **Modified/Added** restangular depejdecy injection to `/client/app/scripts/app.js`
* **Modified** `client/app/index.html` by adding linkes to restangular and lodash
* **Modified** `/client/app/scripts/controllers/products/products-review-controller.js` to use restangular instead of ngResource
* **Modified/Cleaned** up comments in `client/app/scripts/controllers/products/modal-product-instance-controller.js`, `client/app/scripts/controllers/products/products-pagination-controller.js`, `client/app/scripts/controllers/products/products-review-controller.js`,`client/app/views/products.html`,`server/router/routes/products.js`
    