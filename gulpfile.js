const gulp = require('gulp');
      watch = require('gulp-watch');
      browserSync = require('browser-sync');
      nodemon = require('gulp-nodemon');
      reload = browserSync.reload;

require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');

gulp.task('watch', ['sync'], function(){
    gulp.watch('./css/**/*.css', ['styles'], reload);
    gulp.watch('./views/**/*.pug', reload);
    gulp.watch('./js/modules/**/*.js', ['scripts'], reload);
});

gulp.task('sync', ['browser-sync'], function() {
    watch('./css/**/*.css', function() {
        return gulp.src('./css/styles.css')
            .pipe(browserSync.stream());
    });
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: "http://localhost:5000",
        open: false
    });
});

gulp.task('nodemon', function (cb) {
    let called = false;
    return nodemon({script: 'server.js'}).on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    });
});
