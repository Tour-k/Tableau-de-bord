var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const widgetRouter = require('./routes/widgets');

var app = express();

mongoose.connect('mongodb+srv:////TODO: mettre adresse de la bdd MangoDB),
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion MongoDB success !'))
    .catch(() => console.log('Connexion MongoDB fail !'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/widgets', widgetRouter);


app.all("/*", function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        next();
});

module.exports = app;
