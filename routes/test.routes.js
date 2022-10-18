const { Router } = require('express')
const router = new Router()
const { db } = require('../db/db.js')
const { HallSchema } = require('../db/models/HallSchema.js')
const { Cinema } = require('../db/models/Cinema.js')
const { CinemaHall } = require('../db/models/CinemaHall.js')
const { Genre } = require('../db/models/Movie.js')
const { Movie } = require('../db/models/Genre.js')
const { MovieGenre } = require('../db/models/MovieGenre')
const { Seance } = require('../db/models/Seance.js')
const { Customer } = require('../db/models/Customer.js')
const { Booking } = require('../db/models/Booking.js')
const { Place } = require('../db/models/Place.js')

router.get('/schemas', async (req, res) => {
    
    try {
        dbRes = await HallSchema.findAll()
        console.log(dbRes)
        res.json(dbRes)
    } catch (error) {
        // console.log(error)
        res.json({
            error: "internal server error"
        })
    }
})



module.exports = router