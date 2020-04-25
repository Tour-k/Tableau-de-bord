const http = require('http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const widgetRouter = require('./routes/widget');
const apiExtRouter = require('./routes/apiExt');
const userRoutes = require('./routes/user');

var app = express();

mongoose.connect('mongodb+srv://adminIRC:fnmM8ulX9Si9Zzj1@ircdatabase-vkyrn.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true })
    .then(() => console.log('Connexion MongoDB success !'))
    .catch(() => console.log('Connexion MongoDB fail !'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.use('/', indexRouter);

app.use('/api/auth', userRoutes);
app.use('/widget', widgetRouter);

app.use('/callExternAPI', apiExtRouter);

module.exports = app;
