const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Conection
mongoose.connect('mongodb://localhost:27017/crud-mongo',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Css
app.use(express.static(__dirname + '/css'))

// Import Routes
const routes = require('./routes/index');

// Settings
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))

// Routes
app.use('/', routes);

// Stary Server

app.listen(3000,()=>{
    console.log('Server On Port 3000');
})