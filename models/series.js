var mongoose = require("mongoose");

var SerierSchema = new mongoose.Schema({
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
        type: Number,
        default: false,
    }
});

module.exports = mongoose.model("Serie", SerierSchema);
