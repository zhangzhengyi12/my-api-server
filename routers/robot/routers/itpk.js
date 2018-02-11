var express = require('express')
var apiRoute = express.Router()
var axios = require('axios')

apiRoute.get('/', (req, res) => {
  var url = 'http://i.itpk.cn/api.php'
  axios
    .get(url, {
      params: req.query
    })
    .then(response => {
      res.set('Access-Control-Allow-Origin', '*')
      res.json(response.data)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = apiRoute
