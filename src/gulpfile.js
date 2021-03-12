const { src, dest, task, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');

// Компиляция файла в css 
function buildSass() {
    return src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
}

exports.buildSass = buildSass;