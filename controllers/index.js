const mongoose = require('mongoose')
const Book = require('./books')

mongoose.connect('mongodb://localhost:27017')

// module.exports = {
//     Book
// }

module.exports.Book = require('./books')