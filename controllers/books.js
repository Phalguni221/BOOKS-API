const router = require('express').Router()
const db = require('../Models/books')

// GET /books/seed route
router.get('/books/seed', (req, res) => {[(
    {
        title : "The Shinobi Initiative",
        description : "The reality-bending adventures of a clandestine service agency in the year 2166",
        year : 2014,
        quantity : 10,
        imageURL : "https://imgur.com/LEqsHy5.jpeg"
    },

    {
        title : "Tess the Wonder Dog",
        description : "The tale of a dog who gets super powers",
        year : 2007,
        quantity : 3,
        imageURL : "https://imgur.com/cEJmGKV.jpg"
    },

    {
        title : "The Annals of Arathrae",
        description : "This anthology tells the intertwined narratives of six fairy tales.",
        year : 2016,
        quantity : 8,
        imageURL : "https://imgur.com/VGyUtrr.jpeg"
    },

    {
        title : "W∀RP",
        description : "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        year : 2010,
        quantity : 4,
        imageURL : "https://imgur.com/qYLKtPH.jpeg"
    }
      .then((books) => {
        res.json(books)
      })
   .catch(err => {
       console.log(err)
       res.render('error404')
)]}
)
   })

//GET /books route
router.get('/', (req,res) => {
    db.Book.find()
    .then((books) => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.render('error404')
   })
})

 // GET /books/:id route
router.get('/books/:id', (req,res) => {
    db.Book.find()
    .then(books => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.send('error404')
   })
})

//PUT route for /books/:id
router.put('/books/:id', (req,res) => {
    db.Book.find()
    .then(books => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.send('error404')
   })
})

//PATCH route /books/:id
router.put('/books/:id', (req,res) => {
    db.Book.find()
    .then(books => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.send('error404')
   })
})

//DELETE route for /books/:id
router.delete('/books/:id', (req,res) => {
    db.Book.find()
    .then(books => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.send('error404')
   })
})


//POST router for /books/:id
router.post('/books/:id', (req,res) => {
    db.Book.create()
    .then(books => {
        res.json(books)
    }
    )
   .catch(err => {
       console.log(err)
       res.send('error404')
   })
})

module.exports = router
