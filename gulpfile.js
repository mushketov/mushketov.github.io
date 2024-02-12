const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const watch = require('gulp-watch')
gulp.task('watch', function () {
	watch(['./src/*.html', 'src/css/**/*css'], gulp.parallel(browserSync.reload))
})
// Static server
gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: './src/',
			notify: false
		},
	})
})
gulp.task('default', gulp.parallel('server', 'watch'))
