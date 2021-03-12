const { src, dest, task, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const browserSync = require('browser-sync').create();

function browsersync() {
  browserSync.init({
    server: 'src/',
    notify: false,
  })
}

// Компиляция файла в css
function buildSass() {
  return src("src/scss/**/*.scss")
    .pipe(sass())
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 2 versions"],
        }),
        cssnano(),
      ])
    )
    .pipe(dest("dist/css"))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}

function html() {
  return src('src/**/*.html')
    .pipe(dest('dist/'))
    .pipe(browserSync.stream()) 
}

function serve() {
  watch('src/scss/**/*.scss', buildSass);
  watch('src/**/*.html', html)
}

exports.default = series(buildSass, parallel(browsersync, serve));