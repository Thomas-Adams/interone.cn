var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');



// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'scss/*.scss'])
    .pipe(sass({
        errLogToConsole: false,
        onError: function (err) {
            return notify().write(err);
        }
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest("public/_common/css"))
    .pipe(livereload())
    .pipe(browserSync.stream())
    .pipe(notify({message: 'Styles task complete'}));
});


gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('scss/*.scss', ['sass']);
});

