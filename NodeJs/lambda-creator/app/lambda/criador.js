const Creator = require('../../library/Creator/Creator');

const Service = (req, res) => {
    res.locals = {
        error: 'você tentou criar um lambda que já existe. Por favor, altere o nome e rode o criador novamente.',
        success: 'O seu Lambda foi criado com sucesso. Para verificar a estrutura, por favor, navegue até o caminho: '
    };
    let creatorObject = new Creator(req.body);
    let Services = require('./../../models/listServices');
    let verifyCreator = creatorObject.createAWSLambda(Services);
    
    if(verifyCreator) {
        res.render('lambda/success');
    } else {
        res.render('lambda/error');
    }
};

module.exports = Service;
