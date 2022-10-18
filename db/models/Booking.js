const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Booking = db.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }, 
    booking_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    customer_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'customer',
            key: 'id'
        }
    }
})

Booking.sync().then(() => {
    console.log('Booking table created');
});

module.exports = { Booking }