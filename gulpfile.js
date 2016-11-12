var gulp   = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	jshint = require('gulp-jshint'),
	insert = require('gulp-insert');

gulp.task('script-min', function() {
	gulp.src('[lib/**/bootstrapcomponent.js', 'lib/**/*.js'])
	.pipe(jshint())
	.pipe(insert.prepend('bs.'))
	.pipe(concat('bootstrap.js'))
	/*.pipe(insert.transform(function(contents, file) {
		var ret = '';
		var splitContents = contents.split('\n');

		for(var i = 0; i < splitContents.length; i++)
			ret += '\t' + splitContents[i] + '\n';

		return ret;
	}))*/
	.pipe(insert.wrap('bs={};\n','\nmodule.exports=bs;'))
	// .pipe(uglify())
	// .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
	gulp.watch('lib/**', ['script-min']);
});

gulp.task('default', ['script-min', 'watch']);