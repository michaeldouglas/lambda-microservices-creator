#!/bin/sh

# Output colors shell
red=`tput setaf 1`
green=`tput setaf 2`

function installMachine(){
    docker-machine create -d virtualbox --virtualbox-memory "2048" developer-microservices
}

function envMachine(){
    docker-machine env developer-microservices
    eval $(docker-machine env developer-microservices)
}

function upJenkins(){
    docker build -t jenkins-data -f Dockerfile-data .
    docker build -t jenkins2 .
    docker run --name=jenkins-data jenkins-data
    docker run -p 8080:8080 -p 50000:50000 --name=jenkins-master --volumes-from=jenkins-data -d jenkins2
}

echo -n "Você deseja instalar a docker machine (s/n)?"
read answer
if echo "$answer" | grep -iq "^s" ;then
    installMachine
else
    continue;
fi

echo -n "Você deseja setar a machine ENV da máquina (s/n)?"
read answer
if echo "$answer" | grep -iq "^s" ;then
    envMachine
else
    continue;
fi

echo -n "Você deseja subir o ambiente de deploy (s/n)?"
read answer
if echo "$answer" | grep -iq "^s" ;then
    upJenkins
else
    exit;
fi