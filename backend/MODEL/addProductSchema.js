const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const addProductSchema = new Schema({
  // product_id: {
  //   type: Number,
  //   farmer_id: Number,
  // },
  name: {
    type: String,
    trim: true,
  },
  photo: String,

  // productType: {
  //   type: String,
  // },
  desc: {
    type: String,
  },
  price: {
    type: String,
  },
  prod: {
    type: String,
  },
  // rating: {
  //   type: Number,
  //   default: 0,
  // },
  // user: {
  //   type: mongoose.Schema.ObjectId, // Corrected
  //   ref: "User",
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const addProduct = mongoose.model("addProduct", addProductSchema);

module.exports = addProduct;
