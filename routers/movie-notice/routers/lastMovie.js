var express = require('express')
var apiRoute = express.Router()
var axios = require('axios')
var getMovies = require('../util/util').getDbData

apiRoute.get('/', (req, res) => {
  res.json(getMovies('movies'))
})

module.exports = apiRoute
