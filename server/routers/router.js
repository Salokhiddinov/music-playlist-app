const express = require("express");
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller')


// Routes
route.get('/', services.homeRoutes)
route.get('/add-song', services.add_song_page)
route.get('/update-song', services.update_song_page)


// API
route.post('/api/songs', controller.create);
route.get('/api/songs', controller.find);
route.put('/api/songs:id', controller.update);
route.delete('/api/songs:id', controller.delete);


module.exports = route;