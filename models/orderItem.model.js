import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
}, {timestamps: true});

export const OrderItem = mongoose.model("OrderItem", orderItemSchema);
