// Dependencies
const concat = require('gulp-concat');
const debug  = require('gulp-debug');
const gulp   = require('gulp');
const eslint = require('gulp-eslint');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

// File definitions
const jsFiles = [
    './node_modules/rainbow-code/dist/rainbow.js',
    './src/nsis.js'
];

const options = {
    output: {
        comments: /^!/
    }
};

// Build custom Rainbow version with NSIS
gulp.task('build', gulp.series( (done) => {
    gulp.src('./src/nsis.js')
        .pipe(concat('nsis.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify(options))
        .pipe(rename({
            basename: 'nsis.min'
        }))
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
