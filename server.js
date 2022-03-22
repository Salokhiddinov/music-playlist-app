// Importing packages
const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');

// App
const app = express();

// PORT
const port = process.env.PORT || 8000;
dotenv.config({
    path: "config.env"
})

// Requests
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}))

// Engine
app.set('view engine', "ejs");

// Paths
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))




app.get("/", (req, res) => {
  res.render('index');
});

app.get("/add-user", (req, res) => {
  res.render('add-user.ejs');
});

app.get("/update-user", (req, res) => {
  res.render('update-user.ejs');
});



app.listen(port, () => {
  console.log(`Server is on port ${port} 🤘`);
  console.log(`Link: http://localhost:${port}`)
});
