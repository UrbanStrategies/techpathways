var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
 
gulp.task('default', function() {
    gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(minify())
	.pipe(gulp.dest('./build/css'));
});
