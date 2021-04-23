const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb://localhost/node_auth', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to database');
})

const routes = require('./routes/routes')

app = express()

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080']
}))

app.use(express.json())

app.use('/api', routes)

app.listen(8000, () => {
    console.log('Connected to server');
})