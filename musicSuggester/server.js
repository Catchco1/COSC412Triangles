//modules
const express = require('express');
const app = express();
var mongoose = require('mongoose');

//port
const port = 3000;

//config
var db = require('./config/db');
console.log("connecting--",db)
mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true});

//Frontend routes
app.get('/', (req,res)  => res.send('Welcome to Music Suggester'));

//Defining Route
app.get('/route', function(req, res){
    res.send('This is routing using Node and Express')
});

//API route
var Band = require('./models/bands');
app.get('/api/bands', function(req,res){
    Band.find(function(err, bands){
        if(err)
            res.send(err);
        res.json(bands);
    });
});


//Start app at http://localhost:3000
app.listen(port, () => console.log(`Music suggester listening on port ${port}`));