const { DataTypes } = require('sequelize');
const { Database } = require('../configs/sequelize');

const Marca = Database.getInstance().sequelize.define('Marca', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = { Marca };
