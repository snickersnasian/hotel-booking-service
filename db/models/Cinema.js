const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Cinema = db.define('cinema', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    city: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    address: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

Cinema.sync().then(() => {
    console.log('Cinema table created');
});

module.exports = { Cinema }