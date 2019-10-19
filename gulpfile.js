let gulp = require('gulp');
let tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'JBOaLBonN09pwOVExmOc3pyydow3MW3G',
        }))
        .pipe(gulp.dest('images'));
        done();
});