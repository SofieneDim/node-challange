require('dotenv').config();
const express = require("express");
app = express();
cors = require("cors")
db = require("./db");
bodyParser = require("body-parser");
port = process.env.NODE_PORT || 3030;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const randomRoute = require('./routes/Random');
app.use("/all", randomRoute);

const moviesRoute = require('./routes/Movies');
app.use("/movies", moviesRoute);

const seriesRoute = require('./routes/Series');
app.use("/series", seriesRoute);


app.listen(port, () => console.log(`Server started on port ${port}`)); 