const express = require("express");
router = express.Router();
Series = require('../models/series');
paginate = require("./common/helpers");
numberOfItems = require("./common/constants");


router.get("/search", async (req, res) => {
    const { title, date } = req.query;
    if (!title) return res.status(201).send();
    var regex = new RegExp(["^", title, "$"].join(""), "i");
    try {
        let result = await Series.find({ title: regex });
        if (!date) return res.status(200).send(result);
        else if (result.length && result[0].released == date)
            return res.status(200).send(result);
        else return res.status(200).send([]);
    } catch (error) {
        res.json({ message: error });
    };
});

router.get("/:pageNumber", async (req, res) => {
    try {
        const series = await Series.find();
        const responce = paginate(series, numberOfItems, req.params.pageNumber)
        res.status(200).send({ content: responce, itemsNumber: series.length })
    } catch (error) {
        res.json({ message: error });
    }
});

router.post("/", async (req, res) => {
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