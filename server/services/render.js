const Song = require("../model/model");

exports.homeRoutes = (req, res) => {
  res.render("index");
};
exports.not_found_page = (req, res) => {
  res.render("not-found.ejs");
};

exports.all_songs_page = async (req, res) => {
  const songs = await Song.find({});
  res.render("all-songs.ejs", { songs: songs });
};

exports.add_song_page = (req, res) => {
  res.render("add-song.ejs");
};

exports.get_song_page = async (req, res) => {
  const thesong = await Song.findByIdAndUpdate({ _id: req.query.id });
  res.render("get-song.ejs", { song: thesong });
};

exports.update_song_page = async (req, res) => {
  try {
    const songData = await Song.findByIdAndUpdate({ _id: req.query.id });
    res.render("update-song.ejs", { song: songData });
  } catch (error) {
    res.status(404).send({
      status: "failed",
      message: error,
    });
  }
};
