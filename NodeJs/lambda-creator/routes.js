module.exports.set = function(app) {
    app.use('/', require('./app'));
};