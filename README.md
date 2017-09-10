## Lambda Microservices Creator - 0.0.1

[![Latest Unstable Version](https://poser.pugx.org/leaphly/cart-bundle/v/unstable.svg)](//github.com/michaeldouglas/lambda-microservices-creator)
[![License](https://poser.pugx.org/leaphly/cart-bundle/license.svg)](https://github.com/michaeldouglas/lambda-microservices-creator/blob/master/LICENSE)

`Atenção:` O projeto ainda encontra-se na versão `beta` caso seja encontrado
erros, por favor, deixe uma `issue` explicando detalhadamente o erro encontrado. 

O Lambda Microservices Creator é reponsável por cuidar da estrutura de Microservices dos seus lambdas AWS e além disso é capaz de 
reaalizar testes locais dos seu Lambdas e deploy do Lambda para a AWS.

![Lambda Microservices Creator](https://s3-sa-east-1.amazonaws.com/lambda-microservices-creator/LogoTransparente.png)

## Máquina para utilização do Lambda Creator

Para utilizar o Lambda Creator você deve possuir a máquina responsável pela
infraestrutura do projeto. Realize então o clone do Lambda Microservices Infraestrutura:

[https://github.com/michaeldouglas/lambda-microservices-infrastructure](https://github.com/michaeldouglas/lambda-microservices-infrastructure)

## Compatibilidade

 Nodejs >= 6.x
 yarn 0.24.x
 
 
## Instalação

Entre na pasta `Nodejs/lambda-creator` e então execute:

```
yarn
```

Esse comando instala as dependência do Lambda Microservices Creator.

Agora você deve instalar os seguintes pacotes de forma global:

```
yarn global add lambda-local
yarn global add gulp
```