exports.homeRoutes = (req,res)=>{
    res.render('index');
}

exports.add_song=(req,res)=>{
    res.render('add-song.ejs')
}

exports.update_song=(req,res)=>{
    res.render('update-song.ejs')
}