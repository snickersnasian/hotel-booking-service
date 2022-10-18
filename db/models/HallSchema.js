const Sequelize = require('sequelize')
const { db } = require('../db.js')

const HallSchema = db.define('hall_schema', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    rows_count: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    places_count: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(32),
        allowNull: false
    }
})

HallSchema.sync().then(() => {
    console.log('Hall cinema table created');
});

module.exports = { HallSchema }