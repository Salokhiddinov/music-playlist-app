const Songdb = require("../model/model");

//Create
exports.create = async (req, res) => {
  if(!req.body){
    return res.status(400).send({message: "Empty!"});
  }

  const newSong = await new Songdb.create(
  //   {
  //   artist: req.body.artist,
  //   title: req.body.title,
  //   coverImage: req.body.coverImage,
  //   year: req.body.year,
  // }
  req.body
  )

  console.log("=====================");
  console.log(song);
  console.log("=====================");


try{
  res.status(201).json({
    status: "success",
    data: {
      newSong
    }
  })
}
catch(err){
  res.status(400).json({
    status: "failed",
    message: err 
  })
}

  
  // song.save(song).then(data=>{
  //   res.json({

  //   });
  // }).catch(err=>{
  //   res.status(500).send({
  //     message: err.message || "Error 505!"
  //   })
  // })

};

//Read
exports.find = (req, res) => {};

//Update
exports.update = (req, res) => {};

//Delete
exports.delete = (req, res) => {};

