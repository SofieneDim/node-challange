const express = require("express");
router = express.Router();
Movie = require('../models/movies');
paginate = require("./common/helpers").paginate;
numberOfItems = require("./common/constants");


router.get("/search", async (req, res) => {
    const { title, date } = req.query;
    if (!title) return res.status(201).send();
    var regex = new RegExp(["^", title, "$"].join(""), "i");
    try {
        let result = await Movies.find({ title: regex });
        if (!date) return res.status(200).send(result);
        else if (result.length && result[0].released == date)
            return res.status(200).send(result);
        return res.status(200).send([]);
    } catch (error) {
        res.json({ message: error });
    };
});

router.get("/:pageNumber", async (req, res) => {
    try {
        const movies = await Movie.find();
        const responce = paginate(movies, numberOfItems, req.params.pageNumber)
        res.status(200).send({ content: responce, itemsNumber: movies.length });
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async (req, res) => {
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


module.exports = router;