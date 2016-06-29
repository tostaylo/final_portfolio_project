'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
var maps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');





gulp.task('compileSass', function(){
   return gulp.src('scss/styles.scss')
    .pipe(maps.init())
    .pipe(sass())
    .pipe(maps.write('./'))
     .pipe(gulp.dest("css"));
    
});

gulp.task("autoprefixer", function() {
    return gulp.src(['css/styles.css'])
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
     .pipe(gulp.dest("css"));
});

gulp.task("concatStyles", function() {
    return gulp.src(['css/normalize.css', 'css/main.css', 'css/styles.css'])
    .pipe(concat("styles.css"))
    .pipe(gulp.dest("css"));
});

gulp.task("minifyScripts", function() {
    return gulp.src("js/main.js")
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest("js"));
});

gulp.task('minifyStyles',['concatStyles'], function() {
    return gulp.src("css/styles.css")
    .pipe(minifyCSS())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest("css"));
    });



gulp.task("build", ['compileSass','minifyScripts', 'minifyStyles', 'autoprefixer']);


gulp.task("default", ["build"], function() {
    gulp.watch('scss/**/*.scss', ['compileSass']);
    gulp.watch('js/*.js', ["minifyScripts"]);
    gulp.watch('css/*.css', ["minifyStyles"]);
   
});