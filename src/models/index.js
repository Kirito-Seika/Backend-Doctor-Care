'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        operatorsAliases: 0,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
            timezone: "+07:00"
        },
        timezone: "+07:00",
        logging: false,
    });

} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        operatorsAliases: 0,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
            timezone: "+07:00",
        },
        timezone: "+07:00",
        logging: false,
    });

    sequelize.authenticate().then(() => {
        console.log('Connection to your databse has been established successfully.');
    }).catch(err => {
        console.error('Unable to connect to the database:', err);
    });
}

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;