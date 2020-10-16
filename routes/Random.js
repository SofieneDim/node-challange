const express = require("express");
router = express.Router();
Series = require('../models/series');
Movies = require('../models/movies');


router.get("/", async (req, res) => {
    try {
        const series = await Series.find();
        const movies = await Movies.find();
        res.status(200).send(series.concat(movies))
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

router.get("/search", async (req, res) => {
    const {title, date} = req.query;
    let seriesResult = [];
    let moviesResult = [];
    let result = [];
    if(!title) return res.status(201).send();
    try {
        seriesResult = await Series.find({title});
        moviesResult = await Movies.find({title});
        if (!date){
            result = seriesResult.concat(moviesResult);
            return res.status(200).send(result);
        } else { 
            if(seriesResult.length && seriesResult[0].released == date)
                result.push(seriesResult[0]);
            if(moviesResult.length && moviesResult[0].released == date)
                result.push(moviesResult[0]); 
            return res.status(200).send(result);
        };
    } catch (error) {
        res.json({ message: error });
    };
});


module.exports = router;