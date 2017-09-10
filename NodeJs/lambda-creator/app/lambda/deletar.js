var Service = function(req, res) {
    let Services = require('./../../models/listServices');
    let execute = require('shelljs');
    
    let id = req.get('id');
    let name = req.get('name');
    
    Services.destroy({
        where: {
            id: id
        }
    }).then(function(rowDeleted){
        if(rowDeleted === 1){
            execute.rm('-rf', `/development/projects/developer/developer-microservices/NodeJs/${name}`);
            
            res.json({status: 1, message: id});
        }
    }, function(err){
        res.json({status: 0, message: err});
    });
};

module.exports = Service;