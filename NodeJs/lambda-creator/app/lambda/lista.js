const Service = (req, res) => {
    res.locals = {
        title: 'Lista de Lambdas'
    };
    
    res.render('lambda/lista');
};

module.exports = Service;
