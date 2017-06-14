var Tasks = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    basePaths: {
        sass: './resources/assets/**/*.{sass,scss}',
        js: './resources/assets/**/*.js',
        img: './resources/assets/*'
    },
    getTask: function (path, task)
    {
        return require(`./${path}/gulp${task}.js`)(this.gulp, this.plugins);
    }
};

module.exports = Tasks;