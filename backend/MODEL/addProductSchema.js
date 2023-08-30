
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
  
    productType:{
        type: String
    },
    desc:{
        type: String
    },
    price:{
        type: String
    },
    rating:{
        type:Number,
        default:0
    }  
});


const addProduct= mongoose.model('addProduct', addProductSchema);

module.exports = addProduct;