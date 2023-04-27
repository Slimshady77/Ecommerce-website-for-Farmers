
const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const addProductSchema= new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    photo:{
        type: String
    },
  
    prod:{
        type: String
    },
    desc:{
        type: String
    },
    price:{
        type: String
    }

});


const addProduct= mongoose.model('addProduct', addProductSchema);

module.exports = addProduct;