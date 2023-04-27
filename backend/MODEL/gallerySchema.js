const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema= new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    photo:{
        type: String
    },
  
    // birthdate:{
    //     type: String
    // }
});


const Gallery= mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;