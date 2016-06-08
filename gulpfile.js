/*jslint node: true*/
/*jslint nomen: true*/
'use strict';

var nodemon = require('gulp-nodemon');
var gulp = require('gulp');

gulp.task('default', function () {
	console.log('gulp reporting in');
});

gulp.task('run', ['default'], function () {
	console.log('My life for Aiur!');
	return nodemon({
		script : './server.js',
		ext    : 'js',
		watch  : 'api'
	});
});
