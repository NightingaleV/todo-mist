const gulp       = require('gulp');
const sass       = require('gulp-sass');
const uglify     = require('gulp-uglify');
const concat     = require('gulp-concat');


gulp.task('message', function() {
  return console.log('Gulp is running...');
});

//Copy ALL PHP html files
gulp.task('copyPhp', function() {
  gulp.src('app/*.php')
    .pipe(gulp.dest('dist'));
	
	gulp.src('app/templates/*.php')
    .pipe(gulp.dest('dist/templates'));
});

//Copy ALL PHP files
gulp.task('copyPhp', function() {
  gulp.src('app/php/*.php')
    .pipe(gulp.dest('dist/php'));
});

//Compile SASS files
gulp.task('sass', function(){
  gulp.src('app/scss/**/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('main.css'))
      .pipe(gulp.dest('app/css'));
});

//Copy CSS to dist
gulp.task('copyCss', function() {
  gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'));
});

//Scripts
gulp.task('minifyScripts',function(){
  gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message','copyPhp','sass','copyCss','minifyScripts']);
