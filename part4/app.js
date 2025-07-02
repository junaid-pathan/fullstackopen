const express = require('express')
const morgan = require('morgan')
const app = express() 
const blogroutes = require('./controllers/blog')
const middleware = require('./utils/middleware')
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/blogs',blogroutes)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app 
