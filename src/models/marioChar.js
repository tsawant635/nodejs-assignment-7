const mongoose = require('mongoose');

const mariochar = new mongoose.Schema({
    // Your code goes here
    name:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    }
   
})
// create collection
const marioModel = mongoose.model('mariochar', mariochar);
module.exports = marioModel;