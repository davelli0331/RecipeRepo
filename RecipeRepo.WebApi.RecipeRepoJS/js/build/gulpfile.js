var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	merge = require('merge2'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jasmine = require('gulp-jasmine');
	
gulp.task('test', function () {
	return gulp.src(['../RecipeRepo.js', '../tests/**/*.js'])
		.pipe(jasmine({
			verbose: true
		}));
});

gulp.task('ts', function () {
	var tsResult = gulp
		.src(['../lib/**/*.ts', '../_references.ts'])
		.pipe(ts({
			declarationFiles: true,
			noExternalResolve: true
		}));
		
		var js = tsResult.js
			.pipe(uglify())
			.pipe(concat('RecipeRepo.js'));
		
		return merge([
			tsResult.dts.pipe(gulp.dest('../definitions')),
			js.pipe(gulp.dest('../'))
		]);					
});

gulp.task('default', function () {
	gulp.start('ts', 'test');	
});