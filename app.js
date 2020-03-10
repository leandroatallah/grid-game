const express = require('express')
const path = require('path')
const routes = require('./routes/index')

const app = express()

app.use(express.static('assets'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/', routes)

module.exports = app