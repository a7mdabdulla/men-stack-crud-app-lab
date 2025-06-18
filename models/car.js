const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    color: { type: String, required: true }
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car