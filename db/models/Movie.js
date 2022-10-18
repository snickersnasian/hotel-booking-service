const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Movie = db.define('movie', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    age_bracket: {
        type: Sequelize.INTEGER,
        default: 0
    },
    age_bracket: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    start_rental_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    end_rental_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

Movie.sync().then(() => {
    console.log('Movie table created');
});

module.exports = { Movie }