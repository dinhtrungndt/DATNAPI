const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const conversationSchema = new mongoose.Schema({
    id: { type: ObjectId },
    members: [{ type: ObjectId, ref: 'user' }],
    type: { type: String, enum: ['private', 'group'], default: 'private' },
});

module.exports = mongoose.model.conversation || mongoose.model('conversation', conversationSchema);