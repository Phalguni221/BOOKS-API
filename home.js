const express = require('express')
const app = express()

//Routes

app.use('/books', require('./controllers/books'))


app.get('/', (req, res) => {
    // This gets sent to the client 
    // (your web browser most likely!)
    res.send('Dummy Text')
})
)
})

app.listen(3500)
