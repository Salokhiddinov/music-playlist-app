var UserDB = require('../model/model.js');

//Create
exports.create = (req,res)=>{
    // Validation
    if(!req.body){
        res.status(400).send({message: 'Content is empty'})
        return;
    }

    //new song
    const song = new UserDB({
        artist: req.body.artist,
        title: req.body.title,
        photo:req.body.photo,
        year: req.body.year,

    })

    //Save
    song
    .save(song)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({
            message: err.mesage
        })
    })

}

//Read
exports.find = (req,res)=>{

}

//Update
exports.update = (req,res)=>{

}

//Delete
exports.delete = (req,res)=>{

}