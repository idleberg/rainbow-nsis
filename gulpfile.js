// Dependencies
const concat = require('gulp-concat');
const debug  = require('gulp-debug');
const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');

// File definitions
const jsFiles = [
    './src/nsis.js',
];

const options = {
    output: {
        comments: /^!/
    }
};

// Build custom Rainbow version with NSIS
gulp.task('build', gulp.series( (done) => {
    gulp.src(jsFiles)
        .pipe(uglify(options))
        .pipe(concat('nsis.min.js'))
        .pipe(gulp.dest('dist'));
    done();
}));

// Lint JavaScript files
gulp.task('lint', gulp.series( (done) => {
    gulp.src(jsFiles)
        .pipe(debug({title: 'eslint:'}))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    done();
}));
