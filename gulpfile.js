var gulp = require('gulp'),
    concatCss = require('gulp-concat-css'),
    csso = require('gulp-csso'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('default',  function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/css/*.less", function () {
        return gulp.src('app/css/*.less')
          .pipe(less()) 
          .pipe(autoprefixer())             
          .pipe(concatCss("css/main.css"))
          .pipe(csso())
          .pipe(gulp.dest('dist/'))
          .pipe(browserSync.stream());
    }); 
    gulp.watch("*.html").on('change', browserSync.reload); 
});