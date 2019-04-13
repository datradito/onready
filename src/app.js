const express = require('express')
require('./db/mongoose')
const filmRouter = require('./routers/film')

const app = express()

app.use(express.json()) //para parsear el json del http req en un objeto
app.use(filmRouter)

module.exports = app