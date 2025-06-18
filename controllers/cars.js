const Car = require('../models/car')
const router = require('express').Router()

// API
router.get('/cars/new', async (req, res) => {
    res.render('cars/new.ejs')
})

router.post('/cars', async (req, res) => {
    await Car.create(req.body)
    res.redirect('/cars/new')
})

// Read All
router.get("/cars", async (req, res) => {
    const cars = await Car.find();
    res.render("cars/index.ejs", { cars });
});

// Read one
router.get('/cars/:carId', async (req, res) => {
    const car = await Car.findById(req.params.carId)
    res.render('cars/show.ejs', {car})
})

// Edit
router.get('/cars/:carId/edit', async (req,res) => {
    const car = await Car.findById(req.params.carId)
    res.render('cars/edit.ejs', {car})
})

// Update
router.put('/cars/:carId', async (req, res) => {
    await Car.findByIdAndUpdate(req.params.carId, req.body)
    res.redirect(`/cars/${req.params.carId}`)
})

// Delete
router.delete('/cars/:carId', async (req, res) => {
    await Car.findByIdAndDelete(req.params.carId)
    res.redirect('/cars')
})

module.exports = router