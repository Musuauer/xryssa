var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
console.log('gulp is running');
  done();
}