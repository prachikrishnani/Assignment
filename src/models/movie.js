const mongoose = require("mongoose");
const validator = require("validator");

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type : String,
        required:true
    },
    summary:{
        type:String,
        required:true
    }

    
})

const Movie = new mongoose.model('Movie', movieSchema);
module.exports = Movie;
