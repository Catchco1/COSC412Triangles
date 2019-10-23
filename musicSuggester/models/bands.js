var mongoose = require('mongoose');

// define our bands model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('bandsCollection', {
   _id : {type : String, default: ''}
}, "bandsCollection");