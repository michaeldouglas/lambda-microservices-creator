const Service = (req, res) => {
    res.locals = {
        title: 'Criador de Lambda'
    };
    res.render('criador_lambda');
};

module.exports = Service;
