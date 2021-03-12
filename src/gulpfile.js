const { src, dest, task, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

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
    .pipe(dest("dist/css"));
}

exports.buildSass = buildSass;
