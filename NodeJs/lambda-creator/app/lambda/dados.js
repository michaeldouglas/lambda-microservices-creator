const Service = function(req, res) {
    const Services = require('./../../models/listServices');
    
    Services.findAll().then(services => {
        res.json(services);
    });
};

module.exports = Service;
