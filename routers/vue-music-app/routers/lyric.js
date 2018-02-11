var express = require('express')
var apiRoute = express.Router()
var axios = require('axios')

apiRoute.get('/', (req, res) => {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios
    .get(url, {
      headers: {
        referer: 'http://c.y.qq.com',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      var ret = response.data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/
        var mathes = ret.match(reg)
        if (mathes) {
          ret = JSON.parse(mathes[1])
        }
      }
      res.json(ret)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = apiRoute
