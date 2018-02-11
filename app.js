const express = require('express')
const path = require('path')

const app = express()

// 跨域设置
app.all('*', function(req, res, next) {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header('Access-Control-Allow-Credentials', true)
    // 这里获取 origin 请求头 而不是用 *
    res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
  }
  next()
})

// routes

app.use('/vueMusciApp', require('./routers/vue-music-app/app'))

app.use('/robot', require('./routers/robot/app'))

app.use('/movie', require('./routers/movie-notice/app'))

app.use('/netease', require('./routers/NeteaseCloudMusicApi/app'))
// listening

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server running @ http://localhost:${port}`)
})

module.exports = app
