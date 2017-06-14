var Service = function(req, res) {
    let Services = require('./../../models/listServices');
    
    Services.findAll().then(services => {
        res.json(services);
    });
};

module.exports = Service;