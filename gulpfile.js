;'use strict';

const gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csscomb = require('gulp-csscomb'),
    rigger = require('gulp-rigger');

var scssFold = 'source/sass/*.scss',
    blocksFold = 'source/blocks/*.html';

// Source
var settingsSrc = 'source/settings/*.*',
    pagesSrc = 'source/*.html',
    styleSrc = 'source/sass/style.scss',
    singleSrc = 'source/single/**/*.*',
    jsSrc = 'source/js/*.*',
    fontsSrc = 'source/fonts/**',
    imgSrc = 'source/img/**',
    mailSrc = 'source/mail/**';

// Build
var settingsDest = 'build',
    pagesDest = 'build',
    styleDest = 'build/css',
    singleDest = 'build',
    jsDest = 'build/js',
    fontsDest = 'build/fonts',
    imgDest = 'build/img',
    mailDest = 'build/mail';

// Pages
gulp.task('pages', function () {
    gulp.src(pagesSrc)
        .pipe(rigger())
        .pipe(gulp.dest(pagesDest));
});

// Single pages (posts, projects etc)
gulp.task('single', function () {
    gulp.src(singleSrc)
        .pipe(rigger())
        .pipe(gulp.dest(singleDest));
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

// Mailer
gulp.task('mail', function() {
    gulp.src(mailSrc)
        .pipe(gulp.dest(mailDest));
});

//Site settings (.htaccess, robots.txt etc)
gulp.task('settings', function() {
    gulp.src(settingsSrc)
        .pipe(gulp.dest(settingsDest));
});

// Watcher
gulp.task('watch', function() {
    gulp.watch(scssFold, ['styles']);
    gulp.watch(blocksFold, ['pages', 'single']);
    gulp.watch(pagesSrc, ['pages']);
    gulp.watch(singleSrc, ['single']);
    gulp.watch(jsSrc, ['js']);
    gulp.watch(imgSrc, ['img']);
    gulp.watch(fontsSrc, ['fonts']);
    gulp.watch(mailSrc, ['mail']);
    gulp.watch(settingsSrc, ['settings']);
});

// Default (gulp) task
gulp.task('default', ['js', 'img', 'fonts',
    'styles', 'single', 'pages', 'settings', 'mail', 'watch']);