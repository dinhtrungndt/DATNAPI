const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const HistorySchema = new mongoose.Schema({
  id: { type: ObjectId },
  role: { type: String, required: true },
  userId: { type: ObjectId, ref: "user" }
});

module.exports = mongoose.model.history || mongoose.model('history', HistorySchema);
