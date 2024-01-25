const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const CartSchema = new mongoose.Schema({
  id: { type: ObjectId },
  status: { type: Boolean, required: true },
  role: { type: String, required: true },
  userId: { type: ObjectId, ref: "user" },
});

module.exports = mongoose.model.cart || mongoose.model('cart', CartSchema);