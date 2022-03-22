const express = require("express");
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller.js')
route.get('/', services.homeRoutes)

route.get('/add-song', services.add_song)


route.get('/update-song', services.update_song)

route.post('/api/songs', controller.create);
route.get('/api/songs', controller.find);
route.put('/api/songs:id', controller.update);
route.delete('/api/songs:id', controller.delete);


module.exports = route;