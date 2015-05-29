var gulp = require('gulp'),
	ts = require('gulp-typescript'),
	merge = require('merge2'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jasmine = require('gulp-jasmine');
	
gulp.task('typeScriptCompilation', function () {
	return gulp
		.src([
            '../../lib/**/*.ts',
            '!../../lib/**/*.d.ts'])
		.pipe(ts({
		    out: 'RecipeRepo.js',
		    target: 'ES5'
		}))
			.js.pipe(gulp.dest('../../'));
});

gulp.task('concatAllFiles', ['typeScriptCompilation'], function () {
    return gulp.src([
        '../../scripts/es6-promise.js',
        '../../scripts/handlebars.js',
        '../../scripts/underscore.js',
        '../../scripts/jquery*.js',
        '!../../scripts/*.intellisense.js',
        '!../../scripts/*.min.js',
        '../../RecipeRepo.js'
    ])
    .pipe(concat('RecipeRepo.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('../../'));
});

gulp.task('default', function () {
    gulp.start(['typeScriptCompilation', 'concatAllFiles']);	
});