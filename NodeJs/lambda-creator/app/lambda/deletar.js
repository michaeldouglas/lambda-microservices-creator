const Service = (req, res) => {
    const Services = require('./../../models/listServices');
    const execute = require('shelljs');
    
    const id = req.get('id');
    const name = req.get('name');
    
    Services.destroy({
        where: {
            id
        }
    }).then( (rowDeleted) => {
        if(rowDeleted === 1){
            execute.rm('-rf', `/development/projects/developer/developer-microservices/NodeJs/${name}`);
            
            res.json({status: 1, message: id});
        }
    }, (err) => res.json({status: 0, message: err});
    );
};

module.exports = Service;
