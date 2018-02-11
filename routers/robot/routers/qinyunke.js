var express = require('express')
var apiRoute = express.Router()
var axios = require('axios')

apiRoute.get('/', (req, res) => {
  var url = 'http://api.qingyunke.com/api.php'
  axios
    .get(url, {
      params: req.query
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = apiRoute
