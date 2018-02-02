const gulp = require('gulp');
      watch = require('gulp-watch');
      browserSync = require('browser-sync');
      nodemon = require('gulp-nodemon');
      reload = browserSync.reload;


require('./gulp/tasks/styles');
require('./gulp/tasks/scripts');
require('./gulp/tasks/build');

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
    browserSync.init({
        notify: false,
        server: {
            baseDir: './routes'
        },
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
