// Generated on 2015-06-29 using generator-angular 0.11.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        // Commenting out
        //dist: 'dist',
        // Replaced with server
        dist: '../server/dist',
        less: 'less'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },

            js: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },

            jsTest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['newer:jshint:test', 'karma']
            },

            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'postcss']
                //tasks: ['newer:copy:styles', 'autoprefixer']
            },

            less: {
                files: [
                    '<%= yeoman.less %>/{,*/}*.less'
                ],
                tasks: ['less:compile','newer:copy:less']
            },

            gruntfile: {
                files: ['Gruntfile.js']
            },

            livereload: {
                options: {
                livereload: '<%= connect.options.livereload %>'
            },

            files: [
                '<%= yeoman.app %>/{,*/}*.html',
                '.tmp/styles/{,*/}*.css',
                '.tmp/styles/{,*/}*.less',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    },

    // Mongolab API URL

    //https://api.mongolab.com/api/1/databases/gemstore/collections/products/?apiKey=xsBGwWWLUfQGI0AbLhS4_IE310zsjHW5

    // The actual grunt server settings
    connect: {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: 35729
        },

        //proxies: [

        //],

        livereload: {
            options: {
                open: true,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect().use(
                            //'/bower_components',
                            //connect.static('./bower_components')
                            '/src/vendor',
                            connect.static('./src/vendor')
                        ),
                        connect().use(
                            '/app/styles',
                            connect.static('./app/styles')
                        ),
                        connect.static(appConfig.app)
                    ];
                }
            }
        },

        test: {
            options: {
                port: 9001,
                middleware: function (connect) {
                    return [
                        connect.static('.tmp'),
                        connect.static('test'),
                        connect().use(
                            //'/bower_components',
                            //connect.static('./bower_components')
                            '/src/vendor',
                            connect.static('./src/vendor')
                        ),
                        connect.static(appConfig.app)
                    ];
                }
            }
        },

        dist: {
            options: {
                open: true,
                base: '<%= yeoman.dist %>'
                }
            }
        },

        // Modernizr
        modernizr: {
            dist: {
                'devFile': 'node_modules/grunt-modernizr/lib/modernizr-dev.js',

                'outputFile': '.tmp/scripts/modernizr-custom.js',

                // Based on the default selection of 'Extra' from the Modernizr Development download
                'extra': {
                    'shiv': true,
                    'printshiv': false,
                    'load': true,
                    'mq': true,
                    'cssclasses': true,
                },

                // Based on the default selection of `Extensibility` from the Modernizr Development download
                'extensibility': {
                    'addtest': false,
                    'prefixed': false,
                    'teststyles': false,
                    'testprops': false,
                    'testallprops': false,
                    'hasevents': false,
                    'prefixes': false,
                    'domprefixes': false,
                    'cssclassprefix': ''
                },

                'uglify': false,

                'tests': [
                    'csspointerevents'
                ],

                'parseFiles': true,

                'matchCommunityTests': false,

                'customTests': []
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish'),
                smarttabs: true,
            },
            
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/scripts/{,*/}*.js',
                    '!<%= yeoman.app %>//scripts/modernizr-custom.js'
                ]
            },

            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: [
                    'test/spec/{,*/}*.js',
                    '!<%= yeoman.app %>/scripts/modernizr-custom.js'
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*',
                        '<%= yeoman.less %>/{,*/}*.css'
                    ]
                }]
            },

            server: {
                src: '.tmp'
            }
        },

        //create css from the less files
        less: {
            compile: {
                options: {
                    optimization: 2
                },
                files: {
                    // This is working correctly - now need to move to the correct directory
                    //'<%= yeoman.app %>/styles/styles.css': '<%= yeoman.app %>/styles/styles.less',
                    '<%= yeoman.less %>/styles.css' : '<%= yeoman.less %>/main.less'
                }
            }
        },

        // grunt-autoprefixer - https://github.com/nDmitry/grunt-autoprefixer/issues/113
        // Being Deprecated
        // This project has been deprecated in favour of grunt-postcss.
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            
            server: {
                options: {
                    map: true,
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: [
                        '{,*/}*.css',
                        '{,*/}*.less'
                    ],
                    dest: '.tmp/styles/'
                }]
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: [
                        '{,*/}*.css',
                        '{,*/}*.less'
                    ],
                    dest: '.tmp/styles/'
                }]
            }
        },

        //grunt-postcss
        postcss: {
            defaults: {
                options: {
                    // processors: [
                    //     require('pixrem')(), // add fallbacks for rem units
                    //     require('autoprefixer-core')(
                    //         {browsers: 'last 2 versions'}
                    //     ), // add vendor prefixes
                    //     require('cssnano')() // minify the result
                    // ]
                },
                src: 'app/styles/main.css',
                dest: '.tmp/styles/main.css'
            }
        },

        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath:  /\.\.\//
            },
            
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath:  /\.\.\//,
                fileTypes:{
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    '<%= yeoman.app %>/{,*/}*.less',
                    '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            less: ['<%= yeoman.dist %>/styles/{,*/}*.less'],
            options: {
                assetsDirs: [
                    '<%= yeoman.dist %>',
                    '<%= yeoman.dist %>/images',
                    '<%= yeoman.dist %>/styles'
                ]
            }
        },

        //The following *-min tasks will produce minified files in the dist folder
        //By default, your `index.html`'s <!-- Usemin block --> will take care of
        //minification. These next options are pre-configured if you do not wish
        //to use the Usemin blocks.

        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= yeoman.dist %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },

        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= yeoman.dist %>/scripts/scripts.js': [
        //                 '<%= yeoman.dist %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },

        // concat: {
        //     dist: {}
        // },


        // NOTE: Commenting out due to Build failure
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'views/{,*/}*.html',
                        'images/{,*/}*.{webp}',
                        'fonts/{,*/}*.*',
                    ]
                },

                {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>/styles',
                //cwd: '<%= yeoman.less %>',
                dest: '.tmp/styles/',
                src: [
                    '{,*/}*.css'
                ]
            },
            less: {
                expand: true,
                cwd: '<%= yeoman.less %>/',
                dest: '.tmp/styles/',
                src: [
                    '{,*/}*.css'
                ]
            },
            fonts: {
                files: [{
                    src: [
                        'src/vendor/bootstrap-less/fonts/*',
                        'src/vendor/font-awesome/fonts/*'
                    ],
                    dest: '.tmp/fonts/',
                    flatten: true,
                    cwd: '.',
                    expand: true
                }]
            },
            modernizr: {
                files: [{
                    src: [
                        '.tmp/scripts/*.js'
                    ],
                    dest: '<%= yeoman.app %>/scripts',
                    flatten: true,
                    cwd: '.',
                    expand: true
                }]
            }
        },

        // Run some tasks in parallel to speed up the build process
        concurrent: {
            server: [
                'copy:styles',
                'copy:less',
                'copy:fonts',
                'copy:modernizr',
            ],
        
            test: [
                'copy:styles',
                'copy:less',
                'copy:fonts',
                'copy:modernizr'
            ],
        
            dist: [
                'copy:styles',
                'copy:less',
                'copy:fonts',
                'copy:modernizr',
                //'imagemin',
                'svgmin'
            ]
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'wiredep',
            'modernizr',
            'concurrent:server',
            //'autoprefixer',
            'postcss',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'wiredep',
        'concurrent:test',
        //'autoprefixer',
        'postcss',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'wiredep',
        'useminPrepare',
        'modernizr',
        'concurrent:dist',
        //'autoprefixer',
        'postcss',
        'concat',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
