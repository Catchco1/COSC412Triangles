const express = require('express');

const app = express();

const port = 3000

app.get('/', (req,res)  => res.send('Welcome to Music Suggester'));

app.get('/route', function(req, res){
    res.send('This is routing using Node and Express')
});
app.listen(port, () => console.log(`Music suggester listening on port ${port}`));