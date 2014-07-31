'use strict';

/*This runs a JS lint on the code */
var jshintConfig = {
	options: {
		jshintrc: 'conf/jshintrc'
	},
	main: {
		src: [
			'Grunfile.js',
			'public/scripts/*.js',
			'public/scripts/**/*.js'
		]
	}
};

/*This runs a HTML validator on the code */
var htmlhintConfig = {
	build: {
		options: {
			'attr-lowercase': true,
			'attr-value-double-quotes': true,
			'head-script-disabled': true,
			'id-unique': true,
			'img-alt-require': true,
			'tag-self-close': true,
			'tag-pair': true,
			'tagname-lowercase': true,
			'spec-char-escape': true,
			'style-disabled': true
		},
		src: [
			'views/*.html',
			'views/**/*.html'
		]
	}
};

module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: jshintConfig,
		htmlhint: htmlhintConfig,
		watch: {
			js: {
				files: [ 'public/scripts/*.js', 'Gruntfile.js' ],
                tasks: ['jshint']
			}
		},
        open: {
            dev: {
                path: "http://localhost:3000"
            }
        },
        nodemon: {
            dev: {
                script: 'index.js'
            }
        },
        concurrent: {
            dev: [
                'nodemon:dev',
                'open:dev'
            ]
        }
	});


	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');

    // Make Custom Tasks with grunt tasks
	grunt.registerTask('test', [
		'jshint',
		'htmlhint'
	]);

    grunt.registerTask('compile', [
		//'less'
	]);

    // Using our custom tasks
    grunt.registerTask('build', [
        'test',
        'compile'
    ]);

    grunt.registerTask('dev', [
        'build',
        'concurrent'
    ]);
};