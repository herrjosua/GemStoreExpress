
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
* [Mean-Stack Tutorial](https://thinkster.io/mean-stack-tutorial/ "Mean-Stack Tutorial")


## Current Issues/Road Blocks

* ~~After adding a new product the `href` value is not being updated until after a page refresh~~

* Unable to add a review to a product. Current is adding a blank review. Is not adding the review details

## Todo

* Add `grunt-modernizr` to project & and add modernizier task

## Tutorial

### Install prerequisites

* Node v0.10.x+ &mdash; To install go to [NodeJS website](https://nodejs.org/download/ "NodeJS") and download/install the appropriate version for your OS.

* npm v2.1.0+ &mdash; To install type `npm install -g`

* git &mdash; To install go to [Git website](http://git-scm.com/downloads/ "Git website") and download/install the appropriate version for your OS.

* Mongodb &mdash; To install go to [Install MongoDB](http://docs.mongodb.org/manual/installation/ "Install MongoDB") and download/install the appropriate version for your OS

* Yeoman &mdash; To install type `npm yo -g`

* Grunt CLI &mdash; To install type `npm grunt-cli -g`

* Bower &mdash; To install type `npm bower -g`

### Project Setup

* Install The Yeoman Generator Angular by typing `npm install generator-angular -g`

* Install Express by typing `npm install express-generator -g`

* Install Express Generator by typing `npm install express-generator -g`

### Project Directory Structure

**Notes**: This project has been tested with the versions listed in the Project Dependencies section below

* Create a project directory `$ mkdir gemStoreApp && cd gemStoreApp`

* Create a `/client` directory within the `gemStoreApp` directory by typing `$ mkdir client`

* Create a `/server` directory within the `gemStoreApp` directory by typing `$ mkdir server`

### Scaffold out your app using the Yeoman Generator Angular

* Change directory to the `/client` directory

* Type `yo angular` to run the generator

## Project Dependencies

### Package.json

- **General**
- NPM version: Tested with `2.12.1` 
- Node version:  At least version `0.10.0`. Tested with `0.12.5`
- Yeoman version: `1.4.7`
- Bower version: `1.4.1`
- Grunt version: `0.4.5`
- Grunt CLI version: `0.1.13`
- Express version: `2.12.1`
- **Client**
- grunt@0.4.5
- ~grunt-autoprefixer@2.2.0~~ &mdash; **Note:**  Being Deprecated use grunt-postcss instead *(Already included)*
- grunt-concurrent@1.0.1
- grunt-connect-proxy@0.2.0
- grunt-contrib-clean@0.6.0
- grunt-contrib-concat@0.5.1
- grunt-contrib-connect@0.9.0
- grunt-contrib-copy@0.7.0
- grunt-contrib-cssmin@0.12.3
- grunt-contrib-htmlmin@0.4.0
- ~~grunt-contrib-imagemin@0.9.4~~ &mdash; **Note:** This is causing a build failure. It has been commented out from `Gruntfile.js` the build but the package is still in `package.json`
- grunt-contrib-jshint@0.11.2
- grunt-contrib-less@1.0.1
- grunt-contrib-uglify@0.7.0
- grunt-contrib-watch@0.6.1
- grunt-filerev@2.3.1
- grunt-google-cdn@0.4.3
- grunt-karma@0.11.2
- grunt-newer@1.1.1
- grunt-ng-annotate@0.9.2
- grunt-postcss@0.5.4
- grunt-rev@0.1.0
- grunt-svgmin@2.0.1
- grunt-usemin@3.0.0
- grunt-wiredep@2.0.0
- jasmine-core@2.3.4
- jshint-stylish@1.0.2
- karma@0.12.37
- karma-jasmine@0.3.6
- karma-ng-html2js-preprocessor@0.1.2
- karma-phantomjs-launcher@0.2.0
- load-grunt-tasks@3.2.0
- mongojs@1.0.2
- phantomjs@1.9.17
- time-grunt@1.2.1
- **Server**
- bcrypt@0.8.3
- body-parser@1.0.2
- cli-color@1.0.0
- cookie-parser@1.0.1
- debug@0.7.4
- express@4.0.0
- express-jwt@3.0.1
- jsonwebtoken@5.0.2
- moment@2.10.3
- mongoose@4.0.6
- morgan@1.0.1
- npmlog@1.2.1
- passport@0.2.2
- passport-local@1.0.0
- serve-favicon@2.3.0 &mdash; **Note:** Being Deprecated use static-favicon instead (Already included)
- static-favicon@2.0.0-alpha
- underscore@1.8.3

### Bower.json

- **Client**
- angular@1.3.16
- angular-bootstrap@~0.13.0
- angular-ui-router@0.2.15
- mongojs@~1.0.1
- font-awesome@~4.3.0
- bootstrap-less@~3.3.4
- angular-resource@1.3.16
- angular-route@1.3.16 &mdash; **Note:** Will remove once angular-ui-router is properly configered
- karma@~0.4.6
- protractor@~2.1.0
- angular-breadcrumb@0.4.0
- **Dev**
- angular-mocks@1.3.16

## Build Notes

**Notes**: Please see `README.md` in the `GemStoreExpress/server` directory for instructions on how to configure to run on Windows & OS X operating systems. Please see `README.md`  in the `GemStoreExpress/client` directory for Build notes

### Intitial Build

* Checkout code from my GitHub repo

* Run `bower install` & `npm install` in the `/client/` directory

* Run `npm install` in the `/server/` directory

### Development Build

* Open four terminal prompts

* Change directory to `GemStoreExpress/client`

* Change directory to `GemStoreExpress/server`

* Change directory to `GemStoreExpress` for starting Mongodb

* Change directory to `GemStoreExpress` for command line access to database

* In the first `GemStoreExpress` terminal prompt

* Run `mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend --httpinterface --rest`

* In the second `GemStoreExpress` terminal prompt

* Run `mongo`

* To manually add an entry to the database run `db.products.insert({name: "Product 3", description: "Product 3 Description", shine: "100", price: "149.99", rarity: "150", color: "clear", faces:"6"})`

* In the  `GemStoreExpress/client` terminal prompt

* Run `grunt serve`

* Close the browser window that automatically opens

* In the  `GemStoreExpress/server` terminal prompt

* Run `npm test`


### Production Build

* Shut down the servers if they are running

* In the  `GemStoreExpress/client` terminal prompt

* Run `grunt --force` to optimize all code

* To Test -- In the  `GemStoreExpress/client` terminal prompt

* Run `npm start`
