var Service = function(req, res) {
    res.locals = {
        title: 'Criador de Lambda'
    };
    
    res.render('index');
};

module.exports = Service;