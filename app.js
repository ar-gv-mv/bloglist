const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config.js')
const blogsRouter = require('./controllers/blogs')
app.use(express.json())
app.use('/api/blogs', blogsRouter)

mongoose.connect(config.mongoUrl)

app.use(cors())

module.exports = app