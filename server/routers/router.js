const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

// Front-end routes
route.get("/", services.homeRoutes);
route.get("/add-song", services.add_song_page);
route.get("/update-song", services.update_song_page);
route.get("/all-songs", services.all_songs_page);
route.get("/get-song", services.get_song_page);


// Back-end (API) routes
route.get("/api/songs", controller.getAllSongs);
route.get("/api/songs/:id", controller.getSong);
route.post("/api/songs", controller.createSong);
route.put("/api/songs/:id", controller.updateSong);
route.delete("/api/songs/:id", controller.deleteSong);

module.exports = route;
