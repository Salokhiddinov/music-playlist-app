const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    artist:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        requited: false,
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fapkpure.com%2Fgama-free-mp3-music-download%2Fcom.music.gama.mp3.download&psig=AOvVaw3kRpMv2iNFoyejiAxC3Adt&ust=1648038214020000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDj_vja2fYCFQAAAAAdAAAAABAN',
    },
    year:{
        type: Number,
        required: true
    }
})

const UserDB = mongoose.model('userdb', schema);

module.exports = UserDB;