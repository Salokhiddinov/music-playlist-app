exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.add_song_page=(req,res)=>{
    res.render('add-song.ejs')
}

exports.update_song_page=(req,res)=>{
    res.render('update-song.ejs')
}