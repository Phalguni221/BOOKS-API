const router = require('express').Router()
const db = require('../models')

// GET /books/seed route
books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "W∀RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
  })

//GET /books route
books.get('/books', (req,res) => {
    db.Book.find()
    .then(res.json(books)({
    })
    )
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})


// GET /books/:id route
books.get('/books/:id', (req,res) => {
    db.Book.find()
        res.json(books)({
    })
   .catch(err => {
       console.log(err)
       res.render('error404')
   })

//PUT route for /books/:id
books.put('/books/:id', (req,res) => {
    db.Book.find()
    res.json(books)({
    })
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})

//PATCH route /books/:id
books.patch('/books/:id', (req,res) => {
    db.Book.find()
    res.json(books)({
    })
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})

//DELETE route for /books/:id
books.delete('/books/:id', (req,res) => {
    db.Book.find()
    res.json(books)({
    })
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})


//POST router for /books/:id
books.post('/books/:id', (req,res) => {
    db.Book.find()
    res.json(books)({
    })
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})

module.exports = router