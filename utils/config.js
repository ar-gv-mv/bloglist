require('dotenv').config()

const PORT = process.env.PORT || 3003
const mongoUrl = process.env.mongoUrl || 'mongodb://localhost/bloglist'

module.exports = {
  mongoUrl,
  PORT
}