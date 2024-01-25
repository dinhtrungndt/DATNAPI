const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const messageSchema = new mongoose.Schema({
    id: { type: ObjectId },
    conversationId: { type: ObjectId, ref: 'conversation' },
    senderId: { type: ObjectId, ref: 'user' },
    content: { type: String, required: true },
    timeStamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model.message || mongoose.model('message', messageSchema);