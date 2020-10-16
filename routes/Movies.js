const express = require("express");
router = express.Router();
Movie = require('../models/movies');


router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).send(movies)
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async(req, res) => {
    const newMovie = new Movie({
        title: req.body.title,
        image: req.body.image,
        writer: req.body.writer,
        rating: req.body.rating,
        released: req.body.released,
        description: req.body.description,
    });
    try {
        await newMovie.save();
        res.status(200).send("New movie successfully registered!");
    } catch (error) {
        res.json({ message: error });
    };
});


// add search here


module.exports = router;