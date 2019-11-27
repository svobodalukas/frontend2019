var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const gulpStylelint = require('gulp-stylelint');

gulp.task('styles', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('> 1%'))
        .pipe(uglifycss())
        .pipe(gulpStylelint({
            reporters: [
                {formatter: 'string', console: true}
            ]
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
    ;
});

gulp.task('watch', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('scss/**/*.scss', ['styles']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
