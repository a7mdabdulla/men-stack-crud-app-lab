const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')

const methodOverride = require("method-override")

const app = express()
const port = 3000



// DB Connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to the DB: ${mongoose.connection.name}`)
})


app.get('/', async (req, res) => {
    res.render("index.ejs")
})

app.use(express.urlencoded({extended: true}))
app.use(methodOverride("_method"));

const carCtrl = require('./controllers/cars')

app.use('/', carCtrl);

app.listen(port, () => {
    console.log(`Listening on PORT ${port}`)
})
