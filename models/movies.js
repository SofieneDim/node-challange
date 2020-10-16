var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        unique: true,
    },
    released: {
        type: String,
        required: true,
        minlength: 3,
    },
    writer: {
        type: String,
        required: true,
        minlength: 3,
    },
    description: {
        type: String,
        minlength: 3,
    },
    rating: {
        type: Number,
        default: false,
    },
    image: {
        type: String,
        default: false,
    }
});

module.exports = mongoose.model("Movie", MovieSchema);
