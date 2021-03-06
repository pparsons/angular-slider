module.exports = function(grunt){
    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        srcFiles: [
            'src/rangeInputSupported.js',
            'src/angular-slider.js',
            'src/slider.css'
        ],
        concat: {
            prod: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> v<%= pkg.version %> \n http://github.com/pparsons \n License: MIT \n*/\n'
            },
            build: {
                src: ['<%= srcFiles %>'],
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            options: {
                jshintrc: true,
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    'src/**/*.js',
                ],
                options: {
                    force: true
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task(s).
    grunt.registerTask('default', ['jshint:all', 'uglify', 'concat:prod']);

    grunt.loadNpmTasks('grunt-contrib-concat');

};
