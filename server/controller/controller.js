const Song = require("../model/model");
// Create
exports.createSong = async (req, res) => {
  try {

    if (req.body.coverImage.trim() === "") {
      req.body.coverImage =
        "https://www.pngitem.com/pimgs/m/81-815706_purple-music-note-icon-purple-music-notes-logo.png";
    }

    const newSong = await Song.create(req.body);
    res.redirect("/all-songs");
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
  res.send("/get-song");
};

// Update
exports.updateSong = async (req, res) => {
  try {
    
    if (req.body.coverImage.trim() === "") {
      req.body.coverImage =
        "https://www.pngitem.com/pimgs/m/81-815706_purple-music-note-icon-purple-music-notes-logo.png";
    }

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
