const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new mongoose.Schema({
  id: { type: ObjectId },
  password: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  name: { type: String, required: true },
  uytin: { type: String, required: true, default: 0 },
});

module.exports = mongoose.model.user || mongoose.model('user', UserSchema);
