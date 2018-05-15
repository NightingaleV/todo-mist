const gulp       = require('gulp');
const sass       = require('gulp-sass');
const uglify     = require('gulp-uglify');
const concat     = require('gulp-concat');


gulp.task('message', function() {
  return console.log('Gulp is running...');
});

//Copy ALL HTML files
gulp.task('copyHtml', function() {
  gulp.src('app/*.html')
    .pipe(gulp.dest('dist/src'));
});

//Compile SASS files
gulp.task('sass', function(){
  gulp.src('app/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('master.css'))
      .pipe(gulp.dest('app/css'));
});

//Scripts
gulp.task('minifyScripts',function(){
  gulp.src('app/js/*.js')
    .pipe(concat('master.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', ['message','copyHtml','sass', 'minifyScripts'])
