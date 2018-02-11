const express = require('express')
const app = express()

app.use('/qinyunke', require('./routers/qinyunke'))
app.use('/itpk', require('./routers/itpk'))
app.use('/myule', require('./routers/myule'))

module.exports = app
