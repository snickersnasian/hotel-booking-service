const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Place = db.define('place', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    row: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    place: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seance_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'seance',
            key: 'id'
        }
    },
    booking_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'booking',
            key: 'id'
        }
    }
})

Place.sync().then(() => {
    console.log('Place table created');
});

module.exports = { Place }