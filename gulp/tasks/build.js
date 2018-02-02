var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del');

gulp.task('deleteDistFolder', function() {
    return del('./docs');
})

gulp.task('optimiseImages', ['deleteDistFolder'], function() {
    return gulp.src(['./images/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .pipe(gulp.dest('./docs/images'))
})

gulp.task('build', ['deleteDistFolder', 'optimiseImages']);
