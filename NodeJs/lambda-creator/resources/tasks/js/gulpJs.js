//Carrega as tarefas
module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./resources/assets/js/**/*.js')
            .pipe(plugins.concat('app.min.js'))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write())
            .pipe(gulp.dest('./assets/js'));
    };
};