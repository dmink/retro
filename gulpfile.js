;'use strict';

const gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    rigger = require('gulp-rigger');

var sassFold = 'source/sass/*.scss',
    htmlFold = 'source/html/*.html';

var indexSrc = 'source/index.html',
    sassSrc = 'source/sass/style.scss',
    jsSrc = 'source/js/*.*',
    fontsSrc = 'source/fonts/**',
    imgSrc = 'source/img/**';

var indexDest = 'build',
    sassDest = 'build/css',
    jsDest = 'build/js',
    fontsDest = 'build/fonts',
    imgDest = 'build/img';

// Pages
    gulp.task('index', function () {
    gulp.src(indexSrc)
        .pipe(rigger())
        .pipe(gulp.dest(indexDest));
});

// SASS to CSS
gulp.task('styles', function() {
    return sass(sassSrc)
        .pipe(autoprefixer('last 2 version'))
        .pipe(csscomb())
        .pipe(gulp.dest(sassDest));
});

// JavaScript
gulp.task('js', function() {
    gulp.src(jsSrc)
        .pipe(gulp.dest(jsDest));
});

// Fonts
gulp.task('fonts', function() {
    gulp.src(fontsSrc)
        .pipe(gulp.dest(fontsDest));
});

// Images
gulp.task('img', function() {
    gulp.src(imgSrc)
        .pipe(gulp.dest(imgDest));
});

// Watcher
gulp.task('watch', function() {
    gulp.watch(sassFold, ['styles']);
    gulp.watch(indexSrc, ['index']);
    gulp.watch(htmlFold, ['index']);
    gulp.watch(jsSrc, ['js']);
    gulp.watch(imgSrc, ['img']);
    gulp.watch(fontsSrc, ['fonts']);
});

// Default (gulp) task
gulp.task('default', ['js', 'img', 'fonts',
    'styles', 'index', 'watch']);