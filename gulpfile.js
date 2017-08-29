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
    mangle: false,
    nameCache: null,
    output: {
        comments: /^!/
    }
};

// Build custom Rainbow version with NSIS
gulp.task('build:pack', gulp.series( (done) => {
    gulp.src(jsFiles)
        .pipe(concat('rainbow-nsis.js'))
        .pipe(gulp.dest('dist'))
        .pipe(uglify(options))
        .pipe(rename({
            basename: 'rainbow-nsis.min'
        }))
        .pipe(gulp.dest('dist'));
    done();
}));

// Build uglified NSIS mode
gulp.task('build:mode', gulp.series( (done) => {
    gulp.src('./src/nsis.js')
        .pipe(concat('nsis.min.js'))
        .pipe(uglify(options))
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

// Available tasks
gulp.task('build', gulp.parallel('build:mode', 'build:pack', (done) => {
  done();
}));
