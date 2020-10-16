require('dotenv').config();
const express = require("express");
app = express();
bodyParser = require("body-parser");
db = require("./db");
port = process.env.NODE_PORT || 3002;


app.use(bodyParser.urlencoded({ extended: true }));


const randomRoute = require('./routes/Random');
app.use("/all", randomRoute);

const moviesRoute = require('./routes/Movies');
app.use("/movies", moviesRoute);

const seriesRoute = require('./routes/Series');
app.use("/series", seriesRoute);








app.listen(port, () => console.log(`Server started on port ${port}`));