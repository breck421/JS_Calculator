'use strict';

var util = require('util');

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
		htmlhint: htmlhintConfig
	});

	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('test', [
		'jshint',
		'htmlhint'
	]);
};