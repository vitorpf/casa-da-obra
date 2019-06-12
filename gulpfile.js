var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', ()=> {
    return gulp.src('_sass/**/*.sass').pipe(sass(/*{ outputStyle: 'compressed'} */)).pipe(gulp.dest('css'))
});
gulp.task('watch', ()=> {
    gulp.watch('_sass/**/*.sass', gulp.series('sass'))
});

gulp.task('default', gulp.series(['sass','watch']));