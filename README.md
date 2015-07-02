# GemStoreExpress
* Git repository: https://github.com/herrjosua/GemStoreExpress.git
* Author: Joshua Bock
* Email: Josh@JoshuaBock.com
* URL: http://www.JoshuaBock.com
* Description:  AngularJS Project based off the following projects
	* Shaping up with AngularJS &mdash; [https://www.codeschool.com/courses/shaping-up-with-angular-js](https://www.codeschool.com/courses/shaping-up-with-angular-js/ "Shaping up with AngularJS")
	* Yeoman &mdash; [http://yeoman.io/codelab.html](http://yeoman.io/codelab.html/ "Yeoman Tutorial")
	* Building an Angular & Express App &mdash; [http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-1/ "Building an Eangular & Express App - Part 1")

## Project Dependencies

 - **General**
	 - NPM version: Tested with `2.12.1` 
	 - Node version:  At least version `0.10.0`. Tested with `0.12.0`
	 - Yeoman version: `1.4.7`
	 - Bower version: `1.4.1`
	 - Grunt version: `0.4.5`
	 - Grunt CLI version: `0.1.13`
	 - Express version: `2.12.1`
 - **Client**
	 - grunt@0.4.5
	 - ~~grunt-autoprefixer@2.2.0~~ &mdash; **Note:**  Being Deprecated use grunt-postcss instead *(Already included)*
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
	 - body-parser@1.0.2
	 - cookie-parser@1.0.1
	 - debug@0.7.4 
	 - express@4.0.0 
	 - jade@1.3.1 
	 - morgan@1.0.1 
	 - serve-favicon@2.3.0 &mdash; **Note:** Being Deprecated use static-favicon instead (Already included)
	 - static-favicon@2.0.0-alpha

## Current Issues/Road Blocks

*None

## Latest Status

* Building an Angular & Express App - Part 2 &mdash; [http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/](http://start.jcolemorrison.com/building-an-angular-and-express-app-part-2/ "Building an Eangular & Express App - Part 2")
	* ~~The Angular Signup Controller &mdash; Having trouble getting the signin controller to output what I entered in the form~~

## Installation Instructions

**Note**:  Steps below are deviations from the steps provided in the tutorials above

* 

## Build Notes

**Notes**: Please see `README.md` in the `GemStoreExpress/server` directory for instructions on how to configure to run on Windows & OS X operating systems. Please see `README.md`  in the `GemStoreExpress/client` directory for Build notes

### Development Build

* Open two terminal prompts

	* Change directory to `GemStoreExpress/client`

	* Change directory to `GemStoreExpress/server`

* In the  `GemStoreExpress/client` terminal prompt

	* Run `grunt serve`

	* Close the browser window that automatically opens

* In the  `GemStoreExpress/server` terminal prompt

	* Run `npm test`

	* Close the browser window that automatically opens


### Production Build

* Shut down the servers if they are running

* In the  `GemStoreExpress/client` terminal prompt

	* Run `grunt --force` to optimize all code

* To Test -- In the  `GemStoreExpress/client` terminal prompt

	* Run `npm start`
