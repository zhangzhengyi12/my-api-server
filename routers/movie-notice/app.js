const express = require('express')
const app = express()
var back = require('./background/background.main.js')

back.run()
app.use('/lastMovies', require('./routers/lastMovie'))

module.exports = app
