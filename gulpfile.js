var gulp = require('gulp');
var minify = require('gulp-cssnano');
var concat = require('gulp-concat');
var minifyJs = require('gulp-minify')
var merge = require('merge-stream');
var replace = require('gulp-replace-path');
var path = require('path');
var clean = require('gulp-clean');

gulp.task('minify-css', function() {

  var pathsToMinify = [
    'css/main.css',
    'css/responsive.css'
  ];

  var pathsToConcat = [
    'css/bootstrap.min.css',
    'css/font-awesome.min.css',
    'css/animate.min.css',
    'css/main.css',
    'css/responsive.css'

  ];

  var minStream = gulp.src(pathsToMinify)
    .pipe(minify());

  var concatStream = gulp.src(pathsToConcat)

  return merge(minStream, concatStream)
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'));

});

gulp.task('minify-js', function() {

  var pathsToMinify = [
    'js/jquery.js',
    'js/html5shiv.js',
    'js/main.js'
  ];

  var pathsToConcat = [
    'js/jquery.js',
    'js/bootstrap.min.js',
    'js/html5shiv.js',
    'js/jquery.isotope.min.js',
    'js/main.js',
    'js/respond.min.js',
    'js/wow.min.js'
  ];

  var minStream = gulp.src(pathsToMinify)
    .pipe(minifyJs());

  var concatStream = gulp.src(pathsToConcat)

  return merge(minStream, concatStream)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('replace-path', function() {
  gulp.src(['index.html','about-us.html','cafe.html','careers.html','contact-us.html',
            'locations.html','specials.html'])
    .pipe(replace(/bootstrap\.min\.css/g, 'all.css'))
    .pipe(replace(/<link href="css\/font-awesome\.min\.css" rel="stylesheet">/g, ''))
    .pipe(replace(/<link href="css\/animate\.min\.css" rel="stylesheet">/g, ''))
    .pipe(replace(/<link href="css\/main\.css" rel="stylesheet">/g, ''))
    .pipe(replace(/<link href="css\/responsive\.css" rel="stylesheet">/g, ''))

    .pipe(replace(/jquery\.js/g, 'all.js'))
    .pipe(replace(/<script src="js\/bootstrap\.min\.js"><\/script>/g, ''))
    .pipe(replace(/<script src="js\/jquery\.isotope\.min\.js"><\/script>/g, ''))
    .pipe(replace(/<script src="js\/main\.js"><\/script>/g, ''))
    .pipe(replace(/<script src="js\/wow\.min\.js"><\/script>/g, ''))

    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read:false})
  .pipe(clean());
});

gulp.task('move', function(){
  var filesToMove = [
        'fonts/**/*.*',
        'images/**/*.*'
    ];
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(filesToMove, { base: './' })
  .pipe(gulp.dest('dist'));
});

gulp.task('build', ['minify-css', 'minify-js', 'replace-path', 'move'])
