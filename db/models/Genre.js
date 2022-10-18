const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Genre = db.define('genre', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    description: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})

Genre.sync().then(() => {
    console.log('Genre table created');
});

module.exports = { Genre }