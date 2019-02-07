let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    favouriteThings: String,
    discription: String,
  
},
{
    collection: "favouriteThing"
});

module.exports = mongoose.model('Paru', contactSchema);