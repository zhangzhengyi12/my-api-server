const express = require('express')
const app = express()

// 获取歌单列表
app.use('/getDiscList', require('./routers/getDiscList'))
// 获取歌单详情
app.use('/getDissData', require('./routers/getDissData'))
// 获取歌词
app.use('/lyric', require('./routers/lyric'))

module.exports = app
