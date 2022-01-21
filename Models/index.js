require('dotenv').config()
const mongoose = require('mongoose')
const Book = require('./books')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Book = require('./books')