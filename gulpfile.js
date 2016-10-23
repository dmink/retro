;'use strict';

const gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    rigger = require('gulp-rigger');

var scssFold = 'source/sass/*.scss',
    blocksFold = 'source/blocks/*.html';

// Source
var pagesSrc = 'source/*.html',
    styleSrc = 'source/sass/style.scss',
    jsSrc = 'source/js/*.*',
    fontsSrc = 'source/fonts/**',
    imgSrc = 'source/img/**';

// Build
var pagesDest = 'build',
    styleDest = 'build/css',
    jsDest = 'build/js',
    fontsDest = 'build/fonts',
    imgDest = 'build/img';

// Pages
    gulp.task('pages', function () {
    gulp.src(pagesSrc)
        .pipe(rigger())
        .pipe(gulp.dest(pagesDest));
});

// Styles
gulp.task('styles', function() {
    return sass(styleSrc)
        .pipe(autoprefixer('last 2 version'))
        .pipe(csscomb())
        .pipe(gulp.dest(styleDest));
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
    gulp.watch(scssFold, ['styles']);
    gulp.watch(blocksFold, ['pages']);
    gulp.watch(pagesSrc, ['pages']);
    gulp.watch(jsSrc, ['js']);
    gulp.watch(imgSrc, ['img']);
    gulp.watch(fontsSrc, ['fonts']);
});

// Default (gulp) task
gulp.task('default', ['js', 'img', 'fonts',
    'styles', 'pages', 'watch']);