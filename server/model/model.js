const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    artist : {
        type : String,
        required: [true, "Artist is required"]
    },
    title : {
        type: String,
        required: [true, "Title is required"],
    },
    coverImage:{
        type: String,
        required: false,
        default: "https://www.pngitem.com/pimgs/m/81-815706_purple-music-note-icon-purple-music-notes-logo.png"
    },
    year:{
        type: Number,
        required: [true, "Year is required"],
    }
})

const Songdb = mongoose.model('Songdb', schema);

module.exports = Songdb;