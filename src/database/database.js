// Define que vamos utilizar o Sequelize como ORM
const Sequelize = require ('sequelize');

// Define que vamos usar em modo de ambiente ou desenvolvimento
const environment = process.env.NODE_ENV || 'development';
const config = require ('../config/config.js')[environment]; //vou conectar no db utilizando o arquivo config.js colocando dentro da variavel config

// Para o sequelize os dados do banco de dados
const sequelize = new Sequelize (
    config.database.name,//através doq tava armazenado no config acima acessa as infos para conectar ao BD
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;
