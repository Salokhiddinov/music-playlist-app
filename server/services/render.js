const axios = require("axios");
const Song = require("../model/model");

exports.homeRoutes = (req, res) => {
  res.render("index");
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
  const song = await Song.findByIdAndUpdate({ _id: req.query.id });
  console.log(song);
  res.render("update-song.ejs", { song: song });
};
