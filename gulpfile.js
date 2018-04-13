var babelify = require('babelify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var gulpif = require('gulp-if');
var minifyCSS = require('gulp-csso');
var sass = require('gulp-sass');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var sync = require('browser-sync').create();
var uglify = require('gulp-uglify');

var isProd = process.env.NODE_ENV === 'production';

/**
 * HTML
 */

function templates() {
  return gulp.src(['app/index.html', 'app/kids.html', 'app/teachers.html'])
    .pipe(gulp.dest('dist'))
    .pipe(sync.stream());
}

/**
 * SCSS
 */

function scss() {
  return gulp.src('app/scss/style.scss')
    .pipe(gulpif(!isProd, sourcemaps.init()))
    .pipe(sass())
    .pipe(gulpif(isProd, minifyCSS()))
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest('dist/css'))
    .pipe(sync.stream());
}

/**
 * JS
 */

function js() {
  return browserify({entries: ['app/js/index.js'], debug: true})
    .transform(babelify, {presets: 'es2015'})
    .bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulpif(!isProd, sourcemaps.init({loadMaps: true})))
    .pipe(uglify())
    .pipe(gulpif(!isProd, sourcemaps.write('.')))
    .pipe(gulp.dest('dist/js'))
    .pipe(sync.stream());
};

/**
 * IMAGES
 */

function images() {
  return gulp.src('app/img/**/*')
    .pipe(gulpif(isProd, imagemin({verbose: true})))
    .pipe(gulp.dest('dist/img'));
}

/**
 * FONTS
 */

function fonts() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
}

/**
 * GLOBAL
 */

function clean() {
  return del(['dist']);
}

gulp.task('build', gulp.series(clean, gulp.parallel(templates, scss, js, images, fonts)));

gulp.task('default', gulp.parallel(templates, scss, js, images, fonts, function(done) {
  sync.init({
    server: {
      baseDir: './dist'
    }
  });

  gulp.watch('app/**/*.html', templates);
  gulp.watch('app/**/*.scss', scss);
  gulp.watch('app/**/*.js', js);

  done();
}));
