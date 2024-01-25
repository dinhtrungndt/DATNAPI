const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CategorySchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true },
    img: { type: String, required: true },
    icon: { type: String, required: true }
});

module.exports = mongoose.model.category || mongoose.model('category', CategorySchema);