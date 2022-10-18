const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Customer = db.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    role: {
        type: Sequelize.STRING(20),
        default: 'user'
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false
    }
})

Customer.sync().then(() => {
    console.log('Customer table created');
});

module.exports = { Customer }