// Importing packages
const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./server/database/connection')
const routes = require('./server/routers/router')
// App
const app = express();

// PORT
dotenv.config({
  path: ".env"
})
const port = process.env.PORT || 8000;

// Requests
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// MongoDB connection
connectDB();

// Engine
app.set('view engine', "ejs");

// Paths
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

// Routes
app.use('/', routes)



app.listen(port, () => {
  console.log(`Server is on port ${port} 🤘`);
  console.log(`Link: http://localhost:${port}`)
});
