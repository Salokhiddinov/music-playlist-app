const axios = require("axios");
const port = process.env.PORT;

exports.homeRoutes = (req, res) => {
  res.render("index");
};

exports.all_songs_page = (req, res) => {
    // Make a get request to /api/users
    axios.get('http://localhost:3000/api/songs')
        .then(function(response){
            console.log(response);
            res.render('all-songs', { songs : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_song_page = (req, res) => {
  res.render("add-song.ejs");
};

exports.update_song_page = (req, res) => {
  res.render("update-song.ejs");
};
