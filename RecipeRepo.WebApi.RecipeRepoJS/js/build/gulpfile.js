var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	merge = require('merge2'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jasmine = require('gulp-jasmine');
	
gulp.task('typeScriptCompilation', function () {
	return gulp
		.src(['../lib/**/*.ts', '../_references.ts'])
		.pipe(ts({
			declarationFiles: true,
			noExternalResolve: true,
			removeComments: true
		}))
			.pipe(concat('RecipeRepo.js'))		
			.pipe(gulp.dest('../'));
});

gulp.task('default', function () {
	gulp.start(['typeScriptCompilation']);	
});