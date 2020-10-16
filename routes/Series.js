const express = require("express");
router = express.Router();
Series = require('../models/series');

router.get("/", async (req, res) => {
    try {
        const series = await Series.find();
        res.status(200).send(series)
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async(req, res) => {
    const newMovie = new Series({
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



module.exports = router;