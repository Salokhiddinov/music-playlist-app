// Importing packages
const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const path = require('path');
const connectDB = require('./server/database/connection')

// App
const app = express();

// PORT
const port = process.env.PORT || 8000;
dotenv.config({
    path: "config.env"
})

// Requests
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));


// MongoDB connection
connectDB();


// Engine
app.set('view engine', "ejs");

// Paths
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// Routes
app.use('/', require('./server/routers/router'))



app.listen(port, () => {
  console.log(`Server is on port ${port} 🤘`);
  console.log(`Link: http://localhost:${port}`)
});
