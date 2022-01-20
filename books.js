const mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    title: {type:String, default:'Anonymous'},
    description: {type:String, default:'N/A'},
    year: {type:Number},
    quantity: {type:Number},
    imageURL: {type:String, default:'https://placekitten.com/200/300'},
})
  
  bookSchema.methods.showEstablished = function() {}
    
  module.exports = mongoose.model('Book', bookSchema)