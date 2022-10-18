const express = require('express')
const app = express()
const { db } = require('./db/db.js')
const PORT = process.env.PORT || 3000

app.use('/api', require('./routes/test.routes.js'))

const start = async () => {
    try {

        await db.authenticate()
        console.log('Successful connection to DB')

        app.listen(PORT, () => {
            console.log('App started on port ' + PORT)
        })

    } catch (error) {
        console.log(error)
    }
}

start()