const config = require('./config');
const Sequelize = require('sequelize');

const Database = new Sequelize(config.database, config.username, config.password, {
    dialect: 'mssql'
    , host: config.host
    , port: config.port
    , timeout: 30
, }, {
    pool: {
        max: 5
        , min: 0
        , idle: 30000
    , }
, });


module.exports = Database;