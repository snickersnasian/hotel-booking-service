const Sequelize = require('sequelize')
const { db } = require('../db.js')

const CinemaHall = db.define('cinema_hall', {
    cinema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
            model: 'cinema',
            key: 'id'
        }
    },
    hall_schema_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         
            model: 'hall_schema',
            key: 'id'
        }
    }
})

CinemaHall.sync().then(() => {
    console.log('CinameHall table created');
});

module.exports = { CinemaHall }