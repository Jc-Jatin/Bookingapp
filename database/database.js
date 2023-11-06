const Sequelize = require('sequelize');

const sequelize = new Sequelize('Appointments', 'root', 'root', {dialect : 'mysql'});

module.exports = sequelize;