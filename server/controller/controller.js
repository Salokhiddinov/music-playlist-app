const Song = require("../model/model");

// Create
exports.createSong = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Empty!" });
    }

    const newSong = await Song.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newSong,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

// Read
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    if (!songs) {
      res.status(404).json({
        message: "Something went wrong",
        status: 404,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        songs,
      },
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Couldn't get Songs",
      status: err.statusCode,
      reason: err,
    });
  }
}; 

exports.getSong = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    console.log(req.params);
    if (!song) {
      res.status(404).json({
        message: "Couldn't find a song",
        status: 404,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        song, 
      },
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Something went wrong",
      status: err.statusCode,
      reason: err,
    });
  }
};

// Update
exports.updateSong = async (req, res) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        song,
      },
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Something went wrong",
      status: err.statusCode,
      reason: err,
    });
  }
};

// Delete
exports.deleteSong = async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Something went wrong",
      status: err.statusCode,
      reason: err,
    });
  }
};
