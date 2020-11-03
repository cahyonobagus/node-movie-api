const express = require('express')
require('dotenv').config()

const routeCallback = require('./routeCallback')
const { moviesSearch, moviesGetDetail, notFound } = require('./controllers')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.get('/search', routeCallback(moviesSearch))
app.get('/detail', routeCallback(moviesGetDetail))
// catch 404
app.use(routeCallback(notFound))

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

module.exports = app
