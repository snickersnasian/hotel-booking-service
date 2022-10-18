const Sequelize = require('sequelize')
const { db } = require('../db.js')

const Seance = db.define('seance', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cinema_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'cinema',
            key: 'id'
        }
    },
    movie_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'movie',
            key: 'id'
        }
    }
})

Seance.sync().then(() => {
    console.log('Seance table created');
});

module.exports = { Seance }