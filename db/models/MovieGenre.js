const Sequelize = require('sequelize')
const { db } = require('../db.js')

const MovieGenre = db.define('movie_genre', {
    movie_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'movie',
            key: 'id'
        }
    },
    genre_id: {
        type: Sequelize.INTEGER,
        references: {         
            model: 'genre',
            key: 'id'
        }
    }, 
})

MovieGenre.sync().then(() => {
    console.log('MovieGenre table created');
});

module.exports = { MovieGenre }