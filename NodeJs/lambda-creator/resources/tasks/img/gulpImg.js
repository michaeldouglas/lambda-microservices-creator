//Carrega as tarefas de imagem
module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('./resources/assets/img/*')
            .pipe(plugins.imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBonx: false}],
                use: [plugins.pngquant()]
            }))
            .pipe(gulp.dest('./assets/imgs'));
    };
};