
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var customizeBootstrap = require('gulp-customize-bootstrap');
var sass        = require('gulp-sass');
var bootstrap_sass = 'node_modules/bootstrap/scss/';

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src([bootstrap_sass + 'bootstrap.scss', 'src/scss/*.scss'])
        //.pipe(customizeBootstrap('src/scss/*.scss'))
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

// gulp.task('compileBootstrap', function() {
//   return gulp.src('node_modules/bootstrap/scss/bootstrap.scss')
//     .pipe(customizeBootstrap('src/scss/*.scss'))
//     .pipe(sass())
//     .pipe(gulp.dest('src/css'));
// });

// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js','node_modules/jquery-form-validator/form-validator/jquery.form-validator.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['js','serve']);
