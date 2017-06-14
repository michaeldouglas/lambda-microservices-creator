/**
 * @author Michael Douglas Barbosa Araujo <michaeldouglas010790@gmail.com>
 * @copyright Atitude
 * @description Essa classe é responsável por criar o Json e a estrutura do Lambda
 * @module Creator
 * @type {Structure}
 */


class Creator{
    constructor(request)
    {
        this.execute = require('shelljs');

        // Internal objects
        this.request = request;

        this.parseJsonLambda = () => {
            return `module.exports = {
    region: '${this.request.region}',
	handler: '${this.request.handler}',
	role: '${this.request.role}',
	functionName: '${this.request.name}',
	timeout: ${this.request.timeout},
    runtime: 'nodejs6.10',
	memorySize: 128
}`;
        };
    }

    createAWSLambda(Services)
    {
        if (this.execute.test('-d', `/development/projects/atitude/atitude-microservices/NodeJs/${this.request.name}`)) {
            return false;
        } else {
            return this.execCreateLambda(Services);
        }
    }

    execCreateLambda(Services)
    {
        if (!this.execute.which('git')) {
            this.execute.echo('Sorry, AWS Lambda Creator requires git');
            this.execute.exit(1);
        } else {
            let file = this.parseJsonLambda();
            console.log(file);
            this.execute.echo(`Start of creator of Lambda: ${this.request.name}`);
            this.execute.mkdir('-p', `/development/projects/atitude/atitude-microservices/NodeJs/${this.request.name}`);
            this.execute.cd(`/development/projects/atitude/atitude-microservices/NodeJs/${this.request.name}`);
            if (this.execute.exec('git clone https://git-codecommit.us-east-1.amazonaws.com/v1/repos/atitude-microservices-skeleton . ').code !== 0) {
                this.execute.echo('Error: Git clone Skeleton failed');
                this.execute.exit(1);
            } else {
                this.execute.rm('-rf', 'lambda-config.js');
                this.execute.exec(`echo "${file}" >> lambda-config.js`);
                this.execute.exec(`yarn`);
                if (this.execute.test('-d', `/development/projects/atitude/atitude-microservices/NodeJs/${this.request.name}`)) {
                    
                    // Salva o Lambda no Banco de dados
                    Services.create({ nm_service: this.request.name }).then(result => console.log('Insert realizado com sucesso')).catch(() => console.log('error'));
                    
                    return true;
                }
            }
        }
    }
}

module.exports = Creator;