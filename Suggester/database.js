const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');

// Connection URL

const url = 'mongodb+srv://Root:Din0saur@cluster0-lakt4.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server

MongoClient.connect(url, { useUnifiedTopology: true },  function(err, client) {

  assert.equal(null, err);

  console.log("Connected correctly to server");

})
