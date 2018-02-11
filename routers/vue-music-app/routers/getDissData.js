var express = require('express')
var apiRoute = express.Router()
var axios = require('axios')

apiRoutes.get('/getDissData', (req, res) => {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios
    .get(url, {
      headers: {
        referer: 'http://y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      var ret = response.data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({[^]+})\)$/
        var mathes = ret.match(reg)
        if (mathes) {
          ret = JSON.parse(mathes[1])
        }
      }
      res.set('Access-Control-Allow-Origin', '*')
      res.json(ret)
    })
    .catch(e => {
      console.log(e)
    })
})

module.exports = apiRoute
