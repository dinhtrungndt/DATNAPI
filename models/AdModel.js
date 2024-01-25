const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AdSchema = new Schema({
    id: { type: ObjectId },
    typeAd: { type: String, required: true }, // Correct the typo in 'require' to 'required'
    idProduct: { type: ObjectId, ref: 'product'}
});

module.exports = mongoose.model.ad || mongoose.model('ad', AdSchema);