import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  payment_id: {
    type: Number,
    required: true,
    unique: true,
  },
  order_id: {
    type: Number,
    required: true,
    unique: true,
  },
  payment_date: {
    timestamp: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export const paymentUser = mongoose.model("payment_", paymentSchema);
