const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const php = require('gulp-connect-php'); //for PHP server
const del = require('del');
const runSequence = require('run-sequence');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const prettyHtml = require('gulp-pretty-html');
const sassbeautify = require('gulp-sassbeautify');

var Paths = {
	HERE: './',
	DIST: 'dist',
	DIST_PHP_TEMPLATES: 'dist/templates',
	DIST_PHP_SOURCE: 'dist/php',
	DIST_CSS: 'dist/css',
	DIST_JS: 'dist/js',
	PHP: 'app/*.php',
	PHP_TEMPLATES: 'app/templates/**/*.php',
	PHP_SOURCE: 'app/php/**/*.php',
	SCSS: 'app/scss/**/*.scss',
	CSS: 'app/css/*.css',
	JS: 'app/js/',
  JS_MODULES: 'app/js/modules/*.js'
};

gulp.task('messageStartBuilding', function () {
	return console.log('Gulp has started building your app');
});

gulp.task('messageEndBuilding', function () {
	return console.log('Gulp has finished building your app');
});

//Copy ALL PHP files
gulp.task('copyPhp', function () {
	gulp.src(Paths.PHP)
		.pipe(gulp.dest(Paths.DIST));

	gulp.src(Paths.PHP_TEMPLATES)
		.pipe(gulp.dest(Paths.DIST_PHP_TEMPLATES));

	gulp.src(Paths.PHP_SOURCE)
		.pipe(gulp.dest(Paths.DIST_PHP_SOURCE));
});

//Beautify scss
gulp.task('beautify-scss', function () {
  gulp.src(Paths.SCSS)
    .pipe(sassbeautify())
    .pipe(gulp.dest(Paths.SCSS));
});

//Compile SASS files
gulp.task('sass', function () {
	gulp.src('app/scss/**/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(concat('main.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

//Copy CSS to dist
gulp.task('copyCss', function () {
	gulp.src(Paths.CSS)
		.pipe(sourcemaps.init())
		.pipe(cleanCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(Paths.DIST_CSS));
});

//Scripts
gulp.task('buildScripts', function () {
	gulp.src(Paths.JS_MODULES)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(Paths.JS));
  
  gulp.src(Paths.JS)
		.pipe(uglify())
		.pipe(gulp.dest(Paths.DIST_JS));
});

// Gulp Browser Sync
gulp.task('browserSync', function () {
	browserSync.init({
		proxy: "todomist.com",
		port: 80,
	});
});

// Watchers for saving files
gulp.task('watch', ['browserSync', 'sass', 'buildScripts'], function () {
	gulp.watch(Paths.SCSS, ['sass']);
	// Other watchers
	gulp.watch(Paths.PHP, browserSync.reload);
	gulp.watch(Paths.PHP_SOURCE, browserSync.reload);
	gulp.watch(Paths.PHP_TEMPLATES, browserSync.reload);
	gulp.watch(Paths.JS_MODULES, ['buildScripts']);
  gulp.watch(Paths.JS_MODULES, browserSync.reload);
});

gulp.task('runWatcher', function (callback) {
	runSequence(['sass', 'browserSync', 'watch'],
		callback
	);
});

// Cleaning Dist folder
gulp.task('cleanDist', function () {
	return del.sync('dist');
});

//Building app
gulp.task('build', function (callback) {
	runSequence('cleanDist', ['messageStartBuilding', 'copyPhp', 'sass', 'copyCss', 'buildScripts', 'messageEndBuilding'], callback);
});


//Building app
gulp.task('default', function (callback) {
	runSequence('cleanDist', ['messageStartBuilding', 'copyPhp', 'sass', 'copyCss', 'buildScripts', 'messageEndBuilding'], callback);
});

gulp.task('pages', function () {
	return gulp.src('app/*.php')
		.pipe(prettyHtml({
			indent_size: 2,
			indent_char: ' ',
			unformatted: ['code', 'pre', 'em', 'strong', 'span', 'i', 'b', 'br']
		}))
		.pipe(gulp.dest(Paths.PHP));
});